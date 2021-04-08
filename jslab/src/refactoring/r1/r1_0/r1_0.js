const invoices = require('../invoices.json');
const plays = require('../plays.json');

function statement(invoice, plays) {
  const statmentData = {};
  statmentData.customer = invoice.customer;
  statmentData.performances = invoice.performances.map(enrichPerformance);
  statmentData.totalAmount = totalAmountFor(statmentData);
  statmentData.volumeCredits = totalVolumeCreditsFor(statmentData);
  return renderPlainText(statmentData);

  /**
   *
   */

  function totalAmountFor(data) {
    let result = 0;
    for (let perf of data.performances) {
      result += perf.amount;
    }
    return result;
  }

  function totalVolumeCreditsFor(data) {
    let result = 0;
    for (let perf of data.performances) {
      result = perf.volumeCredits;
    }
    return result;
  }

  function volumeCreditsFor(perf) {
    let result = 0;
    result += Math.max(perf.audience - 30, 0);
    if ('comedy' === playFor(perf).type) {
      result += Math.floor(perf.audience / 5);
    }
    return result;
  }

  function amountFor(perf) {
    let result = 0;
    switch (playFor(perf).type) {
      case 'tragedy':
        result = 40000;
        if (perf.audience > 30) {
          result += 1000 * (perf.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (perf.audience > 20) {
          result += 10000 + 500 * (perf.audience - 20);
        }
        result += 300 * perf.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(perf).type}`);
    }
    return result;
  }

  function playFor(perf) {
    return plays[perf.playID];
  }

  function enrichPerformance(perf) {
    const result = Object.assign({}, perf);
    result.play = playFor(perf);
    result.amount = amountFor(perf);
    result.volumeCredits = volumeCreditsFor(perf);
    return result;
  }
}

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    // 청구 내역을 출력한다.
    result += ` ${perf.play.name}: ${usd(perf.amount / 100)} (${
      perf.audience
    }석)\n`;
  }

  result += `총액: ${usd(data.totalAmount / 100)}\n`;
  result += `적립 포인트: ${data.volumeCredits}점\n`;

  const nums = result.match(/\$[0-9|.|,]+/gi);
  return { result, nums };

  /**
   *
   */

  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}

// invoices.map((invoice) => {
//   statement(invoice, plays);
// });

module.exports = {
  statement,
};
