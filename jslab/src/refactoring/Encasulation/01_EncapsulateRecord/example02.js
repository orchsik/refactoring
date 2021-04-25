const _ = require('lodash');
const customerOriginData = require('./data.sample');

const customerID = 38672;
const year = 2015;
const month = 1;

// // 쓰기 예
// customerOriginData[customerID].usages[year][month] = 50;

// // 읽기 예
// function compareUsage(customerID, laterYear, month) {
//   const later = customerOriginData[customerID].usages[laterYear][month];
//   const earlier = customerOriginData[customerID].usages[laterYear - 1][month];
//   return {
//     earlierAmount: earlier,
//     laterAmount: later,
//     change: later - earlier,
//   };
// }

/**
 * #1 변수 캡슐화
 */
// function getRawDataOfCustomers() {
//   return customerOriginData;
// }
// function setRawDataOfCustomers(arg) {
//   customerOriginData = arg;
// }

// // 쓰기 예
// getRawDataOfCustomers()[customerID].usages[year][month] = 500;

// //  읽기 예
// function compareUsage(customerID, laterYear, month) {
//   const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
//   const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][
//     month
//   ];
//   return {
//     earlierAmount: earlier,
//     laterAmount: later,
//     change: later - earlier,
//   };
// }

/**
 * 완전 캡슐화
 */
class CustomerData {
  constructor(data) {
    this._data = data;
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
}

const customerData = new CustomerData(customerOriginData);

function getCustomerData() {
  return customerData;
}

// 쓰기 예
getCustomerData.setUsage(customerID, year, month, 500);

// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().usage(customerID, laterYear, month);
  const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
  return {
    laterAmount: later,
    change: later - earlier,
  };
}
