// 결제 금액 중 상품 가격을 계산
function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;

  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discount;

  return { basePrice, quantity, discount };
}

// 배송 정보를 이용하여 결제 금액 중 배송비를 계산
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  const shippingCost = priceData.quantity * shippingPerCase;

  return priceData.basePrice - priceData.discount + shippingCost;
}

function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity);

  return applyShipping(priceData, shippingMethod);
}
