import React from "react";
import "./order.css"

export function Order({
                        asideProps = {},
                        titleProps = {},
                        ulProps = {},
                        liProps = {},
                        liTitleProps = {},
                        liMetaProps = {},
                        liValueProps = {},
                        btnProps = {},

                        onCheckout = () => {
                        },
                        orderPrice = 0,
                        discountValue = 0,
                        deliveryCost = 0,
                      }) {
  // если нет скидки, то к нам приход string "No", надо его подменять на number
  const discountNum = parseFloat(discountValue) || 0;

  const total = orderPrice - discountNum + deliveryCost; // итоговый чек

  return (
    <aside className={asideProps.className || "order-summary"}>
      <h2 className={titleProps.className || "order-summary__title"}>Your Order</h2>
      <ul className={ulProps.className || "order-summary__list"}>
        <li className={liProps.className || "order-summary__item"}>
          <span className={liTitleProps.className || "order-summary__label"}>Order price</span>
          <span className={liValueProps.className || "order-summary__value"}>
            {`$${orderPrice.toFixed(2)}`}
          </span>
        </li>
        <li className={liProps.className || "order-summary__item"}>
          <span className={liTitleProps.className || "order-summary__label"}>Discount for promo code</span>
          <span className={liValueProps.className || "order-summary__value order-summary__value--text"}>
            {discountNum > 0 ? `-$${discountNum.toFixed(2)}` : 'No'}
          </span>
        </li>
        <li className={liProps.className || "order-summary__item"}>
          <span className={liTitleProps.className || "order-summary__label"}>Delivery</span>
          <span className={liMetaProps.className || "order-summary__meta"}>
            {liMetaProps.data}</span>
          <span className={liValueProps.className || "order-summary__value"}>
            {`$${deliveryCost.toFixed(2)}`}</span>
        </li>
        <li className={liProps.className || "order-summary__item order-summary__item--total"}>
          <span className={liTitleProps.className || "order-summary__label"}>Total</span>
          <span className={liValueProps.className || "order-summary__value"}>
            {`$${total.toFixed(2)}`}</span>
        </li>
      </ul>
      <button className={btnProps.className || "order-summary__checkout"}
              onClick={onCheckout}>{btnProps.content || "Checkout"}</button>
    </aside>
  )
}
