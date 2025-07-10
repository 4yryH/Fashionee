import React from 'react';
import './Order.css';

// чек с подсчетами в корзине
export function Order({
  liMetaProps = {},
  orderPrice = 0,
  discountPercent = 0,
  deliveryCost = 0,
  cartItems = [],
  promoCode = '',
}) {
  // отдельный подсчет самой суммы скидки для дальнейшего вычета в итоге
  const discountAmount = (orderPrice * discountPercent) / 100;

  const total = orderPrice - discountAmount + deliveryCost; // итоговый чек

  const handleCheckout = () => {
    console.log(
      'Items:',
      cartItems,
      'Promo code:',
      promoCode,
      'Discount percent:',
      discountPercent,
      'Discount amount:',
      discountAmount.toFixed(2),
      'Delivery:',
      deliveryCost,
      'Total amount:',
      total.toFixed(2)
    );
  };
  return (
    <aside className={'order-summary'}>
      <div className="order-summary__wrapper">
        <h2 className={'order-summary__title'}>Your Order</h2>
        <ul className={'order-summary__list'}>
          <li className={'order-summary__item'}>
            <span className={'order-summary__label'}>Order price</span>
            <span className={'order-summary__value'}>
              {`$${orderPrice.toFixed(2)}`}
            </span>
          </li>
          <li className={'order-summary__item'}>
            <span className={'order-summary__label'}>
              Discount for promo code
            </span>
            <span className={'order-summary__value order-summary__value--text'}>
              {discountPercent > 0 ? `${discountPercent}%` : 'No'}
            </span>
          </li>
          <li className={'order-summary__item'}>
            <span className={'order-summary__label'}>Delivery</span>
            <span className={'order-summary__meta'}>{liMetaProps.data}</span>
            <span className={'order-summary__value'}>
              {`$${deliveryCost.toFixed(2)}`}
            </span>
          </li>
          <li className={'order-summary__item order-summary__item--total'}>
            <span className={'order-summary__label'}>Total</span>
            <span className={'order-summary__value'}>
              {`$${total.toFixed(2)}`}
            </span>
          </li>
        </ul>
        <button className={'order-summary__checkout'} onClick={handleCheckout}>
          {'Checkout'}
        </button>
      </div>
    </aside>
  );
}
