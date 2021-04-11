const { substract } = require('./substract');

describe('test substract', () => {
  it('', () => {
    expect(substract(2, 1)).toEqual(1);
  });
  it('', () => {
    expect(substract(1, 2)).toEqual(-1);
  });
});
