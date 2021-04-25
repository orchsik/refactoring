class Order {
  constructor() {
    this._data = aRecord;
  }

  get qunatity() {
    return this._data.qunatity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    return (
      this.quantity * othis.itemPrice -
      Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
      Math.min(this.qunatity * this.itemPrice * 0.1, 100)
    );
  }
}
