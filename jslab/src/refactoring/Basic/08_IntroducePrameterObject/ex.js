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

// 정상 범위를 벗어난 측정값을 찾는 함수.
function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

// 호출문
readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor, // 최저 온도
  operatingPlan.temperatureCeiling // 최고 온도
);
