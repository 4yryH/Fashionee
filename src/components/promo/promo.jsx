import React from "react";
import {Title} from "../ui/title/title.jsx";
import promoData from "../../data/promo-card-data.json";
import {PromoCardList} from "../promo-card-list/promo-card-list.jsx";
import "./promo.css"

export function Promo() {
  return (
    <>
      <aside className="promo">
        <Title content="Reviewed By You" fontSize="24px"/>
        <ul className="promo__list">
          {/*зашит метод map для перебора списка и его рендера*/}
          <PromoCardList items={promoData}/>
        </ul>
      </aside>
    </>
  )
}
