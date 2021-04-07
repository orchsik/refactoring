const plays = require('./plays.json');
const invoices = require('./invoices.json');
const { statement } = require('./r1_0/r1_0');

describe('Test [r1]', () => {
  it('', () => {
    invoices.map((invoice) => {
      const result = statement(invoice, plays);
      const { nums } = result;
      const expected = ['$650.00', '$580.00', '$500.00', '$1,730.00'];
      expect(nums).toEqual(expected);
    });
    // expect(r1_0()).toEqual(1);
  });
});
