import React, {useEffect, useState} from "react";
import FavoriteIcon from "../../assets/icons/favorite.svg?react";
import "./product-card.css";

export function ProductCard({
                              imgProps = {},
                              badgeSaleProps = {},
                              badgeNewProps = {},
                              titleProps = {},
                              priceProps = {},
                              priceOldProps = {},
                              //работа с избранным
                              isFavorite = false,
                              onToggleFavorite,
                              // работа с добавлением в корзину
                              initialQuantity = 0,
                              onAddToCart,
                              onQuantityChange,
                            }) {
  //состояние для избранного
  const [fav, setFav] = useState(isFavorite);

  useEffect(() => {
    setFav(isFavorite);
  }, [isFavorite]);

  function handleFavClick() {
    // сначала сразу меняем визуал
    setFav(v => !v);
    // а потом прокидываем обновление в App
    onToggleFavorite();
  }

  // состояние для счетчика
  const [count, setCount] = useState(initialQuantity);

  // синхрон initialQuantity
  useEffect(() => {
    setCount(initialQuantity);
  }, [initialQuantity]);


  // клик на buy
  function handleBuy() {
    onAddToCart();
    onQuantityChange(1);
  }

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
    <article className={"product-card"}>
      <div className={"product-card__image-wrapper"}>
        <img alt={imgProps.alt || ""}
             className={imgProps.className || "product-card__image"}
             height={imgProps.height || "360"}
             width={imgProps.width || "262"}
             src={imgProps.src || null}
             {...imgProps}
        />
        <span
          className={badgeSaleProps.className || "product-card__badge product-card__badge--sale"}>{badgeSaleProps.content || "Sale"}</span>
        <span
          className={badgeNewProps.className || "product-card__badge product-card__badge--new"}>{badgeNewProps.content || "New"}</span>
        <button
          type="button"
          aria-label="Toggle favorite"
          className={`product-card__favorite ${fav ? "product-card__favorite--active" : ""}`}
          onClick={handleFavClick}
        >
          <FavoriteIcon
            className={`product-card__favorite-icon ${fav ? "product-card__favorite-icon--active" : ""}`}
            height={17}
            width={19}
          />

        </button>
      </div>
      <div className={"product-card__caption-wrapper"}>
        <h3 className={"product-card__title"}>{titleProps.content || "Title Product"}</h3>
        <div className={"product-card__prices"}>
          <p
            className={priceProps.className || "product-card__price"}>{priceProps.price != null && priceProps.price !== ""
            ? `$${priceProps.price}`
            : "Price"
          }</p>
          {priceOldProps.oldPrice != null && priceOldProps.oldPrice !== "" &&
            <p className={priceOldProps.className || "product-card__price product-card__price--old"}>
              {`$${priceOldProps.oldPrice}`}
            </p>}
        </div>
        <div>
          {count === 0 ? (
            <button
              className="product-card__btn-buy"
              type="button"
              onClick={handleBuy}
            >
              Buy
            </button>
          ) : (
            <div className={"product-card__quantity"}>
              <button onClick={decrease} disabled={count === 0}
                      className={"product-card__quantity-button product-card__minus"}>-
              </button>
              <span className={"product-card__quantity-input"}>{count}</span>
              <button onClick={increase}
                      className={"product-card__quantity-button product-card__minus"}>+
              </button>
            </div>
          )}
        < /div>
      </div>
    </article>
  )
}
