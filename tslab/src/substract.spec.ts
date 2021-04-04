const { substract } = require('./substract');

describe('test substract', () => {
  it('2-1=1', () => {
    expect(substract(2, 1)).toEqual(1);
  });
  it('1-2=-1', () => {
    expect(substract(1, 2)).toEqual(-1);
  });
});
