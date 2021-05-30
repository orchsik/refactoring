/**
 * Alert
 */
function Alert(title = 'alert') {
  console.log('[1] Alert > ctor');
  // 생성자 함수에 new 깜빡하면 this는 window 객체를 가르키게 됨.
  // guard function
  if (!(this instanceof Alert)) {
    return new Alert(title);
  }
  this.title = title;
}

Alert.prototype.show = function () {
  console.log('show:', this);
};

Alert.prototype.toString = function () {
  return `toString: ${this.title}`;
};

// Static method
Alert.createAlert = function (type, title) {
  switch (type) {
    case 'success':
      return new SuccessAlert(title);
    case 'failure':
      return new FailureAlert(title);
    default:
      return new Alert(title);
  }
};

// const alert = Alert('myAlert');
const alert = Alert.createAlert('', 'myAlert');
console.log('ctor: ', alert.constructor);
alert.show();
console.log(alert.toString());
console.log('\r');

/**
 * SuccessAlert
 */
function SuccessAlert(title = 'succesAlert') {
  console.log('[2] SuccessAlert > ctor');
  Alert.call(this, title); // Calling parent -> Alert -> Constructor
  this.type = 'success';
}

// Alert.prototype을 SucessAlert.prototype로 카피카피.
SuccessAlert.prototype = Object.create(Alert.prototype);

// constructor까지 상속됨.
// Reset the constructor back.
SuccessAlert.prototype.constructor = SuccessAlert;

// const success = new SuccessAlert();
const success = Alert.createAlert('success');
console.log('ctor: ', success.constructor);
success.show();
console.log(success.toString());
console.log('\r');

/**
 * FailureAlert
 */
function FailureAlert(title = 'failureAlert') {
  console.log('[3] FailureAlet > ctor');
  Alert.call(this, title);
  this.type = 'failure';
}
FailureAlert.prototype = Object.create(Alert.prototype);
FailureAlert.prototype.constructor = FailureAlert;

// overriding
FailureAlert.prototype.toString = function () {
  const result = Alert.prototype.toString.call(this);
  return `${result} of type ${this.type}`;
};

// const failure = new FailureAlert();
const failure = Alert.createAlert('failure');
console.log('ctor:', failure.constructor);
failure.show();
console.log(failure.toString());
console.log('\r');
