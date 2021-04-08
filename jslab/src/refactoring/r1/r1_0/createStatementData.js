function createStatementData(invoice, plays) {
  const statmentData = {};
  statmentData.customer = invoice.customer;
  statmentData.performances = invoice.performances.map(enrichPerformance);
  statmentData.totalAmount = totalAmountFor(statmentData);
  statmentData.volumeCredits = totalVolumeCreditsFor(statmentData);
  return statmentData;

  /**
   *
   */

  function totalAmountFor(data) {
    return data.performances.reduce((total, perf) => total + perf.amount, 0);
  }

  function totalVolumeCreditsFor(data) {
    return data.performances.reduce(
      (total, perf) => total + perf.volumeCredits,
      0
    );
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

module.exports = { createStatementData };
