function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
  return quantity * plan.summerRate;
}

function regularCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}

if (summer()) {
  charge = summerCharge();
} else {
  charge = regularCharge();
}

// # 삼항연산자 이용도 좋은 방법
charge = summer() ? summerCharge() : regularCharge();
