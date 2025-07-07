import React, { useState } from 'react';
import './CartCard.css';

export function CartCard({
  imgProps = {},
  titleProps = {},
  priceOldProps = {},
  priceProps = {},
  // для количества товара с других страниц
  initialQuantity = 1,
  onQuantityChange,
  // для удаления карточки из корзины
  onRemove = () => {},
}) {
  // состояние для счетчика
  const [count, setCount] = useState(initialQuantity);

  // счетчик +1
  function increase() {
    setCount((quantity) => {
      const nextState = quantity + 1;
      onQuantityChange(nextState);
      return nextState;
    });
  }

  // счетчик -1
  function decrease() {
    setCount((quantity) => {
      const nextState = quantity - 1;
      onQuantityChange(nextState);
      return nextState;
    });
  }

  return (
    <article className={'cart-item'}>
      <img
        alt={imgProps.alt || ''}
        className={'cart-item__image'}
        src={imgProps.src || null}
        width={imgProps.width || '130'}
        height={imgProps.height || '140'}
      />
      <div className={'cart-item__info'}>
        <h2 className={'cart-item__title'}>
          {titleProps.title || 'Title product'}
        </h2>
        <div className={'cart-item__details'}>
          <div className={'price-box'}>
            {/*старая цена рендерится, только если есть*/}
            {priceOldProps.oldPrice != null &&
              priceOldProps.oldPrice !== '' && (
                <p className={'price-box__old-price'}>
                  {`$${priceOldProps.oldPrice}`}
                </p>
              )}
            <p
              className={'price-box__current-price'}
            >{`$${priceProps.price}`}</p>
          </div>
          <div className={'cart-item__quantity'}>
            <button
              onClick={decrease}
              disabled={count === 1}
              className={'cart-item__quantity-button quantity-button__minus'}
            >
              -
            </button>
            <span className={'cart-item__quantity-input'}>{count}</span>
            <button
              onClick={increase}
              className={'cart-item__quantity-button quantity-button__minus'}
            >
              +
            </button>
          </div>
          <p className={'cart-item__total'}>
            {`$${(priceProps.price * count).toFixed(2)}`}
          </p>
        </div>
      </div>
      <button
        className={'cart-item__remove'}
        aria-label={'Remove item'}
        onClick={onRemove}
      >
        <span className={'cart-item__remove-icon'}>X</span>
      </button>
    </article>
  );
}
