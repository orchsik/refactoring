function plumage(bird) {
  switch (bird) {
    case 'eroup':
      return 'normal';
    case 'afreeca':
      return bird.numberOfCoconuts > 2 ? 'tired' : 'normal';
    case 'norway':
      return bird.voltage > 100 ? 'hungry' : 'normal';
    default:
      return 'dont know';
  }
}

function airSpeedVelocity(bird) {
  switch (bird) {
    case 'eroup':
      return 35;
    case 'afreeca':
      return 40 - 2 * bird.numberOfCoconuts;
    case 'norway':
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
}

function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

// 새 종류에 따라 다르게 동작하는 함수가 여러 개 보인다.
// 종류별 클래스를 만들어서 각각에 맞는 동작을 표현하면 좋다.
