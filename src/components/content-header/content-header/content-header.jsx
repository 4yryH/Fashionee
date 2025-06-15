import React from 'react';
import {Title} from "../../ui/title/title.jsx";
import {Breadcrumbs} from "../breadcrumbs/breadcrumbs.jsx";
import "./content-header.css"

export function ContentHeader({
                                title,             // заголовок
                                breadcrumbItems    // массив крошек
                              }) {
  return (
    <section className="content-header">
      <div className="content-header__wrapper">
        <div className="content-header__wrapper-left">
          <div className="content-header__wrapper-text">
            <Title content={title} hLevel="1" fontSize="80px" lineHeight="1"/>
            <Breadcrumbs
              items={breadcrumbItems.map(item =>
                typeof item === 'string'
                  ? { label: item }
                  : item
              )}
            />
          </div>
        </div>
        <img className="content-header__image" src={null} alt="" height="400" width="400"/>
      </div>
    </section>
  )
}
