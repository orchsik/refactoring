class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this.isAdvanced;
  }
}

class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses.slice();
  }
  set courses(aList) {
    this._courses = aList.slice();
  }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  removeCourse(aCourse, fnIfAbsent = () => new RangeError()) {
    const index = this._courses.indexOf(aCourse);
    if (index === 1) {
      fnIfAbsent();
    } else {
      this._courses.splice(index, 1);
    }
  }
}

const basicCourseNames = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

/**
 * 클라이언트는 Person이 제공하는 수업 컬렉션에서 수업 정보를 얻는다.
 */
const aPerson = new Person('khc');
const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;

/**
 * 세터를 이용해 누구든 컬렉션 마음대로 수정 가능.
 */
// # 1
aPerson.courses = basicCourseNames.map((name) => new Course(name, false));
// # 2
for (const name of basicCourseNames) {
  aPerson.courses.push(new Course(name, false));
}

/**
 * 세터를 사용하지 않고
 * 컬렉션 수정은 클래스에서 제공하는 함수를 사용.
 */
for (const name of basicCourseNames) {
  aPerson.addCourse(new Course(name, false));
}
