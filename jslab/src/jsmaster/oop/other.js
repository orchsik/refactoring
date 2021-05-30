function Alert(title) {
  console.log('[1] Alert > ctor');
  console.log('instanceOf:', this instanceof Alert);
  this.title = title;
}
Alert.prototype.show = function () {
  console.log('show:', this);
};

// Using 'new' keyword implictly returns the curren instance.
const alert = new Alert('It will work.');

// using 'call' on constructor function will return 'undefined'
// as there is no explicit return.
// const alert = Alert.call(null, 'It will NOT works.');

alert.show();
console.log('\r');

function SuccessAlert(title) {
  console.log('[2] SuccessAlert > ctor');
  // # 1
  // Using new Alert(...) here will not give you correct behaviour
  // as the context will change from 'SuccessAlert' to 'Alert'.
  // # 2
  // Alert>ctor의 this는 Alert instance가 아니라
  // SuccessAlert instance 이다.
  Alert.call(this, title);
  this.type = 'success';
}
SuccessAlert.prototype = Object.create(Alert.prototype);
SuccessAlert.prototype.constructor = SuccessAlert;

const successAlert = new SuccessAlert('Upload is successfully.');
successAlert.show();
console.log(successAlert.constructor);
console.log('\r');
