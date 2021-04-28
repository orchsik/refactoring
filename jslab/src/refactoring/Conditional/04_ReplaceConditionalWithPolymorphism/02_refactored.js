// #1 클래스 하나 만들어서 함수 싹 담아라
class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > vr + chr * 2) return 'A';
    return 'B';
  }

  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) {
      result += this.voyage.length - 8;
      if (['중국', '동인도'].includes(this.voyage.zone)) result += 4;
    }
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  get hisotryLengthFactor() {
    return this.history.length > 8 ? 1 : 0;
  }

  get voyageLengthFactor() {
    return this.voyage.length > 14 ? -1 : 0;
  }

  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === '중국') result += 1;
    if (this.voyage.zone === '동인도') result += 1;
    result += this.voyageLengthFactor();
    result += this.hisotryLengthFactor();
    return result;
  }

  get hasChina() {
    return this.history.some((v) => '중국' === v.zone);
  }
}

// #2 서브 클래스 만들어라
class ExperienceChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get hisotryLengthFactor() {
    return this.history.length > 10 ? 0 : 1;
  }

  get voyageProfitFactor() {
    return super.voyageProfitFactor + 3;
  }

  get voyageLengthFactor() {
    let result = 0;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }
}

// #3 팩토리함수
function createRating(voyage, histroy) {
  if (voyage.zone === '중국' && history.some((v) => '중국' === v.zone)) {
    return new ExperienceChinaRating(voyage, history);
  }
  return new Rating(voyage, history);
}

// 호출
const voyage = { zone: '서인도', length: 10 };
const history = [
  { zone: '동인도', profit: 5 },
  { zone: '서인도', profit: 15 },
  { zone: '중국', profit: -2 },
  { zone: '서아프리카', profit: 7 },
];

function raring(voayge, history) {
  return createRating(voayge, history);
}

const myRating = rating(voyage, history);

console.log(myRating);

// 주목할 부분은
// 중국까지 항해해본 선장이 중국을 경유해 항해할 때를 다루는 조건부 로직들이다.
// voyage.zone === '중국' && hasChinah(history)
// 특수 상황을 검사하는 로직이 반복되어 기본 동작 이해를 방해한다.
