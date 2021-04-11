function printOwing(invoice) {
  printBanner();
  recordDueDate(invoice);
  const outstanding = calculateOutstanding(invoice);
  printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding;
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today,
    getMonth(),
    today.getDate() + 30
  );
}

function printBanner() {
  console.log('*******************');
  console.log('***** 고객채무 *****');
  console.log('*******************');
}

function printDetails() {
  // 세부 사항을 출력한다.
  console.log(`고객명: ${invoice.customer}`);
  console.log(`체무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}
