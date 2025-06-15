import React from "react";
import FavoriteIcon from "../../assets/icons/favorite.svg?react";
import "./product-card.css";

export function ProductCard({
                              articleProps = {},
                              divImageWrapperProps = {},
                              imgProps = {},
                              badgeSaleProps = {},
                              badgeNewProps = {},
                              btnFavProps = {},
                              favIconProps = {},
                              divCaptionWrapperProps = {},
                              titleProps = {},
                              divPriceWrapperProps = {},
                              priceProps = {},
                              priceOldProps = {},
                            }) {
  return (
    <article className={articleProps.className || "product-card"}>
      <div className={divImageWrapperProps.className || "product-card__image-wrapper"}>
        <img alt={imgProps.alt || ""} className={imgProps.className || "product-card__image"} height={imgProps.height || "360"} src=""
             width={imgProps.width || "262"}/>
        <span
          className={badgeSaleProps.className || "product-card__badge product-card__badge--sale"}>{badgeSaleProps.content || "Sale"}</span>
        <span
          className={badgeNewProps.className || "product-card__badge product-card__badge--new"}>{badgeNewProps.content || "New"}</span>
        <button aria-label="Add to favorites" className={btnFavProps.className || "product-card__favorite"}>
          {btnFavProps.content || <FavoriteIcon className={favIconProps.className || "product-card__favorite-icon"}
                                                height={favIconProps.height || "17"}
                                                width={favIconProps.width || "19"}/>}
        </button>
      </div>
      <div className={divCaptionWrapperProps.className || "product-card__caption-wrapper"}>
        <h3 className={titleProps.className || "product-card__title"}>{titleProps.content || "Title Product"}</h3>
        <div className={divPriceWrapperProps.className || "product-card__prices"}>
          <p
            className={priceProps.className || "product-card__price"}>{priceProps.price != null && priceProps.price !== ""
            ? `$${priceProps.price}`
            : "Price"
          }</p>
          {/*<p*/}
          {/*  className={priceOldProps.className || "product-card__price product-card__price--old"}>{priceProps.price != null && priceProps.price !== ""*/}
          {/*  ? `$${priceOldProps.price}`*/}
          {/*  : ""*/}
          {/*}</p>*/}
          { priceOldProps.oldPrice != null && priceOldProps.oldPrice !== "" &&
            <p className={priceOldProps.className || "product-card__price product-card__price--old"}>
              {`$${priceOldProps.oldPrice}`}
            </p>}
        </div>
      </div>
    </article>
  )
}
