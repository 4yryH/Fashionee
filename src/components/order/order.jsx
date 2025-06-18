import React from "react";
import "./order.css"

// чек с подсчетами в корзине
export function Order({
                        liMetaProps = {},
                        onCheckout = () => {
                        },
                        orderPrice = 0,
                        discountValue = 0,
                        deliveryCost = 0,
                      }) {
  // если нет скидки, то к нам приход string "No", надо его подменять на number для корректного счета total
  const discountNum = parseFloat(discountValue) || 0;

  const total = orderPrice - discountNum + deliveryCost; // итоговый чек

  return (
    <aside className={"order-summary"}>
      <div className="order-summary__wrapper">
        <h2 className={"order-summary__title"}>Your Order</h2>
        <ul className={"order-summary__list"}>
          <li className={"order-summary__item"}>
            <span className={"order-summary__label"}>Order price</span>
            <span className={"order-summary__value"}>
            {`$${orderPrice.toFixed(2)}`}
          </span>
          </li>
          <li className={"order-summary__item"}>
            <span className={"order-summary__label"}>Discount for promo code</span>
            <span className={"order-summary__value order-summary__value--text"}>
            {discountNum > 0 ? `-$${discountNum.toFixed(2)}` : 'No'}
          </span>
          </li>
          <li className={"order-summary__item"}>
            <span className={"order-summary__label"}>Delivery</span>
            <span className={"order-summary__meta"}>
            {liMetaProps.data}</span>
            <span className={"order-summary__value"}>
            {`$${deliveryCost.toFixed(2)}`}</span>
          </li>
          <li className={"order-summary__item order-summary__item--total"}>
            <span className={"order-summary__label"}>Total</span>
            <span className={"order-summary__value"}>
            {`$${total.toFixed(2)}`}</span>
          </li>
        </ul>
        <button className={"order-summary__checkout"}
                onClick={onCheckout}>{"Checkout"}</button>
      </div>
    </aside>
  )
}
