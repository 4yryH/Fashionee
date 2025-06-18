import React from "react";
import {Button} from "../ui/button/button.jsx";
import PaginationIcon from "../../assets/icons/page-next-prev.svg?react"
import "./pagination.css"

// пагинация для shop, пока без реализации логики, просто шаблон
export function Pagination({
                             iconProps = {}
                           }) {
  return (
    <nav className="pagination">
      <Button btnProps={{
        className: "pagination__button pagination__button--prev",
        content: <PaginationIcon className={iconProps.className || "pagination__icon pagination__icon-prev"}
                                 width={iconProps.width || 51} height={iconProps.height || 12}/>
      }}/>
      <ul className="pagination__list">
        <Button asListItem={true} liProps={{className: "pagination__item"}}
                btnProps={{className: "pagination__link pagination__link--current", content: 1}}/>

        <Button asListItem={true} liProps={{className: "pagination__item"}}
                btnProps={{className: "pagination__link", content: 2}}/>

        <Button asListItem={true} liProps={{className: "pagination__item"}}
                btnProps={{className: "pagination__link", content: 3}}/>
      </ul>
      <Button btnProps={{
        className: "pagination__button pagination__button--next",
        content: <PaginationIcon className={iconProps.className || "pagination__icon pagination__icon-next"}
                                 width={iconProps.width || 51} height={iconProps.height || 12}/>
      }}/>
    </nav>
  )
}
