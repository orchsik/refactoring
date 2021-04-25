// 공통 데이터
const reading = {
  customer: 'ivan',
  quantity: 10,
  month: 6,
  year: 2017,
};

// 클라이언트1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// 클라이언트2
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxTreshold(aReading.year));

// 클라이언트3
const aReading = acquireReading();
const basicChargeAmount = calcuateBaseCharge(aReading);
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// 클라이언트3의 calculateBaseCharge 함수를 클라이언트 1, 2에서도 사용하고 싶다.
// 하지만 데이터와 함수를 따로 떨어트려 놓으면 추후에 재사용성이 떨어진다.
// 함수로 합쳐주자
