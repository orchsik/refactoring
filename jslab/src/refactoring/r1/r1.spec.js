const plays = require('./plays.json');
const invoices = require('./invoices.json');
const { statement } = require('./r1_0/r1_0');

describe('Test [r1]', () => {
  it('', () => {
    invoices.map((invoice) => {
      const result = statement(invoice, plays);
      console.log(result);
    });
    // expect(r1_0()).toEqual(1);
  });
});
