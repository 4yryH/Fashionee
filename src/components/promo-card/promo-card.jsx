import React from "react";
import {Title} from "../ui/title/title.jsx";
import "./promo-card.css"

export function PromoCard({
                            articleProps = {},
                            imgProps = {},
                            divWrapperProps = {},
                            titleProps = {},
                            divWrapperPriceProps = {},
                            priceProps = {},
                            priceOldProps = {},
                          }) {
  return (
    <article className={articleProps.className || "promo-card"}>
      <img
        className={imgProps.className || "promo-card__image"}
        width={imgProps.width || "75"}
        height={imgProps.height || "85"}
        src={imgProps.src || null}
        alt={imgProps.alt || ""}/>
      <div className={divWrapperProps.className || "promo-card__wrapper"}>
        <Title
          hLevel={titleProps.hLevel || "3"}
          className={titleProps.className || "promo-card__title"}
          fontSize={titleProps.fontSize || "14px"}
          fontFamily={titleProps.fontFamily || "Raleway"}
          lineHeight={titleProps.lineHeight || "1.4"}
          content={titleProps.content || "Title Product"}
        />
        <div className={divWrapperPriceProps.className || "promo-card__wrapper-price"}>
          <p className={priceProps.className || "promo-card__price"}>
            {`$${priceProps.price}`}
          </p>
          {/*Проверка приходит ли старая цена, если нет, то и не рендерим этот элемент*/}
          { priceOldProps.oldPrice != null && priceOldProps.oldPrice !== "" &&
          <p className={priceOldProps.className || "promo-card__price promo-card__price--old"}>
            {`$${priceOldProps.oldPrice}`}
          </p>
        }
        </div>
      </div>
    </article>
  )
}
