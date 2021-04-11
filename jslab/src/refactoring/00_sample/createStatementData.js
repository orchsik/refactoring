class PerformanceCalculator {
  constructor(aPerf, aPlay) {
    this.perf = aPerf;
    this.play = aPlay;
  }

  get amount() {
    throw new Error('서브클래스에서 처리하도록 설계되었습니다.');
  }

  get volumeCredits() {
    return Math.max(this.perf.audience - 30, 0);
  }
}

function createPerformanceCalculator(aPerf, aPlay) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerf, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerf, aPlay);
    default:
      throw new Error(`알 수 없는 장르: ${aPlay.type}`);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.perf.audience > 30) {
      result += 1000 * (this.perf.audience - 30);
    }
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.perf.audience > 20) {
      result += 10000 + 500 * (this.perf.audience - 20);
    }
    result += 300 * this.perf.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.perf.audience / 5);
  }
}

function createStatementData(invoice, plays) {
  const statmentData = {};
  statmentData.customer = invoice.customer;
  statmentData.performances = invoice.performances.map(enrichPerformance);
  statmentData.totalAmount = statmentData.performances.reduce(
    (total, perf) => total + perf.amount,
    0
  );
  statmentData.volumeCredits = statmentData.performances.reduce(
    (total, perf) => total + perf.volumeCredits,
    0
  );
  return statmentData;

  function enrichPerformance(perf) {
    const calculator = createPerformanceCalculator(perf, playFor(perf));
    const result = Object.assign({}, perf);
    result.play = playFor(perf);
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(perf) {
    return plays[perf.playID];
  }
}

module.exports = { createStatementData };
