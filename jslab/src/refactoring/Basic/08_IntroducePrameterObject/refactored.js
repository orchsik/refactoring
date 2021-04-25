const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 52, time: '2016-11-10 09:20' },
    { temp: 44, time: '2016-11-10 19:10' },
    { temp: 99, time: '2016-11-10 21:15' },
    { temp: 12, time: '2015-11-10 21:15' },
  ],
};

// readingsOutsideRange의 매개변수 min, max는 범위다.
// 범위라는 개념의 객체를 만들어서 관리해보자.
// 동작가지 추가할 경우 객체가 아니라 클래스로 선언한다.
// 세터는 필요한 경우에만 추가해라.
class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }

  get max() {
    return this._data.max;
  }

  // 동작 추가 !!
  // 클래스로 만들어 두면 이렇게 동작을 클래스로 옮길 수 있따다.
  contains(arg) {
    return arg >= this.min && arg <= this.max;
  }
}

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

// 매개변수를 range 하나로 변경
function readingsOutsideRange(station, range) {
  return station.readings.filter(
    // (r) => r.temp < range.min || r.temp > range.max
    // 클래스에 추가한 동작을 사용
    (r) => range.contains(r.temp)
  );
}

// 호출문
readingsOutsideRange(station, range);
