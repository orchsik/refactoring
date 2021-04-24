class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }

  // 함수 클래스 안으로 넣어라
  // 이름도 바꿈 - 단일 접근 원칙(필드인지, 계산된값=함수인지 모르게) 권장
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxTreshold(this.year));
  }
}

// 클라이언트1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;

// 클라이언트2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = aReading.taxableCharge();

// 클라이언트3
const rawReading = acquireReading();
const aReading = new ReadingrawReading(rawReading);
const basicChargeAmount = aReading.baseCharge;
