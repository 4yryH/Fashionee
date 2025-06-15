import React from "react";
import SearchIcon from "../../../../assets/icons/search.svg?react"
import "./search.css"

export function Search(
  fieldsetProps = {},
  legendProps ={},
  divWrapperProps = {},
  inputProps = {},
  iconProps = {},
  labelProps = {},
) {
  return (
    <fieldset className={fieldsetProps.className || "filter__fieldset"}>
      <legend className={legendProps.className || "visually-hidden"}>{legendProps.content || "Search"}</legend>
      <div className={divWrapperProps.className || "filter__search-wrapper"}>
        <input
          type="search"
          className={inputProps.className || "filter__search"}
          name={inputProps.name || "search"}
          placeholder={inputProps.placeholder || "Search"}
          id={inputProps.id || "search"}/>
        <SearchIcon
          width={18}
          height={18}
          className={iconProps.className || "filter__search-icon"}/>
        <label
          className={labelProps.className || "visually-hidden"}
          htmlFor={labelProps.htmlFor || "search"}>
          {labelProps.content || "Search"}
        </label>
      </div>
    </fieldset>
  )
}
