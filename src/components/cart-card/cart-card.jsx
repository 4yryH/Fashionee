import React, {useState} from 'react';
import "./cart-card.css";

export function CartCard({
                           articleProps = {},
                           imgProps = {},
                           divInfoWrapperProps = {},
                           titleProps = {},
                           divDetailsWrapperProps = {},
                           divPriceWrapperProps = {},
                           priceOldProps = {},
                           priceProps = {},
                           divQuantityWrapperProps = {},
                           btnMinusProps = {},
                           btnPlusProps = {},
                           quantityProps = {},
                           itemPriceTotalProps = {},
                           btnRemoveItemProps = {},
                           iconRemoveItemProps = {},

                           // для количества товара с других страниц
                           initialQuantity = 1,
                           onQuantityChange = (qty) => {
                           },

                           // для удаления карточки из корзины
                           onRemove = () => {
                           }
                         }) {

  const [count, setCount] = useState(initialQuantity);

  function increase() {
    setCount((quantity) => {
      const nextState = quantity + 1;
      onQuantityChange(nextState);
      return nextState;
    });
  }

  function decrease() {
    setCount((quantity) => {
      const nextState = quantity - 1;
      onQuantityChange(nextState);
      return nextState;
    });
  }

  return (
    <article className={articleProps.className || "cart-item"}>
      <img alt={imgProps.alt || ""}
           className={imgProps.className || "cart-item__image"}
           src={imgProps.src || null}
           width={imgProps.width || "130"}
           height={imgProps.height || "140"}/>
      <div className={divInfoWrapperProps.className || "cart-item__info"}>
        <h2 className={titleProps.className || "cart-item__title"}>{titleProps.title || "Title product"}</h2>
        <div className={divDetailsWrapperProps.className || "cart-item__details"}>
          <div className={divPriceWrapperProps.className || "price-box"}>
            {/*старая цена рендерится, только если есть*/}
            {priceOldProps.oldPrice != null && priceOldProps.oldPrice !== "" &&
              <p className={priceOldProps.className || "price-box__old-price"}>
                {`$${priceOldProps.oldPrice}`}

              </p>}
            <p className={priceProps.className || "price-box__current-price"}>{`$${priceProps.price}`}</p>
          </div>
          <div className={divQuantityWrapperProps.className || "cart-item__quantity"}>
            <button onClick={decrease} disabled={count === 1}
                    className={btnMinusProps.className || "cart-item__quantity-button quantity-button__minus"}>-
            </button>
            <span className={quantityProps.className || "cart-item__quantity-input"}>{count}</span>
            <button onClick={increase}
                    className={btnPlusProps.className || "cart-item__quantity-button quantity-button__minus"}>+
            </button>
          </div>
          <p className={itemPriceTotalProps.className || "cart-item__total"}>
            {`$${(priceProps.price * count).toFixed(2)}`}
          </p>
        </div>
      </div>
      <button className={btnRemoveItemProps.className || "cart-item__remove"}
              aria-label={btnRemoveItemProps.label || "Remove item"}
              onClick={onRemove}>
        <span className={iconRemoveItemProps.className || "cart-item__remove-icon"}>X</span>
      </button>
    </article>
  )
}
