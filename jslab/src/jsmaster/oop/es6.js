/**
 * Alert
 */
class Alert {
  static createAlert = function (type, title) {
    switch (type) {
      case 'success':
        return new SuccessAlert(title);
      case 'failure':
        return new FailureAlert(title);
      default:
        return new Alert(title);
    }
  };

  constructor(title = 'alert') {
    console.log('[1] Alert > ctor');
    this.title = title;
  }

  show() {
    console.log('show:', this);
  }

  toString() {
    return `toString: ${this.title}`;
  }
}

// const alert = new Alert('myAlert');
const alert = Alert.createAlert(null, 'myAlert');
console.log('ctor: ', alert.constructor);
alert.show();
console.log(alert.toString());
console.log('\r');

/**
 * SuccessAlert
 */
class SuccessAlert extends Alert {
  constructor(title = 'successAlert') {
    console.log('[2] SucessAlert > ctor');
    super();
    this.title = title;
    this.type = 'success';
  }
}

// const successAlert = new SuccessAlert();
const success = Alert.createAlert('success');
console.log('ctor: ', success.constructor);
success.show();
console.log(success.toString());
console.log('\r');

/**
 * FailureAlert
 */
class FailureAlert extends Alert {
  constructor(title = 'failureAlert') {
    console.log('\n[3] FailureAlert > ctor');
    super();
    this.title = title;
    this.type = 'failure';
  }

  // overriding
  toString() {
    const result = super.toString();
    return `${result} of type ${this.type}`;
  }
}

// const failureAlert = new FailureAlert();
const failure = Alert.createAlert('failure');
console.log('ctor:', failure.constructor);
failure.show();
console.log(failure.toString());
console.log('\r');
