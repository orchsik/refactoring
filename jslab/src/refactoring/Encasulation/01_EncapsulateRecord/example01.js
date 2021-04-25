const rawOrganization = { name: '뽀로로', country: 'korea' };

const result = `<h1>${rawOrganization.name}</h1>`; // 읽기 예
rawOrganization.name = 'newName'; // 쓰기 예

/**
 * #1 변수 캡슐화
 */
function getOrganization() {
  return rawOrganization;
}
const result = `<h1>${getOrganization().name}</h1>`; // 읽기 예
getOrganization().name = 'newName'; // 쓰기 예

/**
 * #2 완전 캡슐화(변수+행위)
 * 캡술화 목적은 위와 같이 변수 자체는 물론
 * 그 내용을 조작하는 방식도 통제하기 위해서다.
 */
class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }
  get country() {
    return this._country;
  }
  set country(aString) {
    this._country = aString;
  }
}

const organization = new Organization(rawOrganization);

function getOrganization() {
  return organization;
}

const result = `<h1>${getOrganization().name}</h1>`;
getOrganization().name = 'newName';
