// 상품의 결제 금액 계산 코드
function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;

  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discount;

  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  const shippingCost = quantity * shippingPerCase;

  const price = basePrice - discount + shippingCost;

  return price;
}

// 계산이 두 단계로 이뤄지고 있음.
// 앞에서는 결제 금액 중 상품 가격을 계산한다.
// 뒤에서는 배송 정보를 이용하여 결제 금액 중 배송비를 계산한다.
// 나중에 상품 가격과 배송비 계산이 변경이 생긴다면 두 단계로 나누는 것이 좋다.
