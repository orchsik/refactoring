const obj = {
  name: 'KHC',
  hobby: 'walk',
  greet: function () {
    console.log(`hello ${this.name} (${this.hobby})`);
  },
};

obj.greet();
obj.greet.call({ name: 'KHJ' });
obj.greet.apply({ name: 'KHJ' });
