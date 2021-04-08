const invoices = require('../invoices.json');
const plays = require('../plays.json');
const { createStatementData } = require('./createStatementData');

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
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
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

module.exports = {
  statement,
};
