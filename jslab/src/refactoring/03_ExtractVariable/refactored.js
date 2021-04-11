//  주문을 표현하는 Order클래스 전체에 적용된다.
//  이처럼 클래스 전체에 영향을 줄 때는 변수가 아닌 메서드로 추출하는 편이다.
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
  get basePrice() {
    return this.qunatity * this.itemPrice;
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.basePrice * 0.1, 100);
  }
}
