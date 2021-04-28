// #1 plumage() airSpeedVelocity()를 하나의 클래스로 묶어라.
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return 'dont know';
  }

  get airSpeedVelocity() {
    return null;
  }
}

// #2 종별 서브클래스 만들어라.
class EroupeanSwallow extends Bird {
  get plumage() {
    return 'normal';
  }
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallo extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? 'tired' : 'normal';
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianSwallow extends Bird {
  get plumage() {
    return this.voltage > 100 ? 'hungry' : 'normal';
  }
  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

// #3 적합한 서브클래스 인스턴스를 만들어줄 팩터리 함수 만들어라.
function createBird(bird) {
  switch (bird.type) {
    case 'eroup':
      return new EroupeanSwallow(bird);
    case 'afreeca':
      return new AfricanSwallo(bird);
    case 'norway':
      return new NorwegianSwallow(bird);
    default:
      return new Bird(bird);
  }
}

// #4 이제 만든거 사용해라
function plumages(birds) {
  return new Map(
    birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage])
  );
}

function speeds(birds) {
  return new Map(
    birds
      .map((b) => createBird(b))
      .map((bird) => [bird.name, bird.airSpeedVelocity])
  );
}
