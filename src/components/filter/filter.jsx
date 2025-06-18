import React, {useState} from "react";
import {Title} from "../ui/title/title.jsx";
import {Input} from "../ui/input/input.jsx";
import {Button} from "../ui/button/button.jsx";
import {Search} from "../search-filter/search.jsx";
import {PriceSlider} from "../ui/price-slider/price-slider.jsx";
import "./filter.css"

// Блок с фильтрами и поиском на странице shop
export function Filter() {
  const [range, setRange] = useState([0, 100]);
  return (
    <aside className="filter">
      <Title content="filter" className="visually-hidden"/>

      <form className="filter__form" method="GET">
        <Search/>
        <fieldset className="filter__fieldset filter__fieldset--categories">
          <legend className="filter__legend">Categories</legend>
          <div className="filter__decor"></div>
          <ul className="filter__list">
            <Input asListItem={true}
                   liProps={{className: "filter__item"}}
                   inputProps={{className: "filter__radio visually-hidden", id: "all", name: "categories", type: "radio", value: "all"}}
                   labelProps={{className: "filter__label", htmlFor: "all", content: "All"}}/>

            <Input asListItem={true}
                   liProps={{className: "filter__item"}}
                   inputProps={{className: "filter__radio visually-hidden", id: "men", name: "categories", type: "radio", value: "men"}}
                   labelProps={{className: "filter__label", htmlFor: "men", content: "Men"}}/>

            <Input asListItem={true}
                   liProps={{className: "filter__item"}}
                   inputProps={{className: "filter__radio visually-hidden", id: "women", name: "categories", type: "radio", value: "women"}}
                   labelProps={{className: "filter__label", htmlFor: "women", content: "Women"}}/>

            <Input asListItem={true}
                   liProps={{className: "filter__item"}}
                   inputProps={{className: "filter__radio visually-hidden", id: "accessories", name: "categories", type: "radio", value: "accessories"}}
                   labelProps={{className: "filter__label", htmlFor: "accessories", content: "Accessories"}}/>

            <Input asListItem={true}
                   liProps={{className: "filter__item"}}
                   inputProps={{className: "filter__radio visually-hidden", id: "new-arrivals", name: "categories", type: "radio", value: "new-arrivals"}}
                   labelProps={{className: "filter__label", htmlFor: "new-arrivals", content: "New arrivals"}}/>
          </ul>
        </fieldset>
        <fieldset className="filter__fieldset filter__fieldset--price">
          <legend className="filter__legend">Price</legend>
          <div className="filter__decor">
            <PriceSlider max={100} min={0} step={0.01} values={range} onChange={setRange} />
          </div>
        </fieldset>
        <fieldset className="filter__fieldset filter__fieldset--colors">
          <legend className="filter__legend">Colors</legend>
          <div className="filter__decor"></div>
          <ul className="filter__list">
            <Input asListItem={true}
                   liProps={{className: "filter__item"}}
                   inputProps={{className: "filter__checkbox visually-hidden", id: "black", name: "colors", type: "checkbox", value: "black"}}
                   labelProps={{className: "filter__label filter__label--checkbox", htmlFor: "black", content: "Black"}}/>

            <Input asListItem={true}
                   liProps={{className: "filter__item"}}
                   inputProps={{className: "filter__checkbox visually-hidden", id: "blue", name: "colors", type: "checkbox", value: "blue"}}
                   labelProps={{className: "filter__label filter__label--checkbox", htmlFor: "blue", content: "Blue"}}/>

            <Input asListItem={true}
                   liProps={{className: "filter__item"}}
                   inputProps={{className: "filter__checkbox visually-hidden", id: "red", name: "colors", type: "checkbox", value: "red"}}
                   labelProps={{className: "filter__label filter__label--checkbox", htmlFor: "red", content: "Red"}}/>

            <Input asListItem={true}
                   liProps={{className: "filter__item"}}
                   inputProps={{className: "filter__checkbox visually-hidden", id: "yellow", name: "colors", type: "checkbox", value: "yellow"}}
                   labelProps={{className: "filter__label filter__label--checkbox", htmlFor: "yellow", content: "Yellow"}}/>

            <Input asListItem={true}
                   liProps={{className: "filter__item"}}
                   inputProps={{className: "filter__checkbox visually-hidden", id: "green", name: "colors", type: "checkbox", value: "green"}}
                   labelProps={{className: "filter__label filter__label--checkbox", htmlFor: "green", content: "Green"}}/>

          </ul>
        </fieldset>
        {/*аккордеон показать дополнительные фильтры, пока просто сделан как шаблон*/}
        <details className="filter__details">
          <summary className="filter__summary"><img alt="" src="../../assets/icons/deploy-icon.svg"/>Deploy</summary>
          <fieldset className="filter__fieldset">
            <legend className="filter__legend filter__legend--additional">additional filter</legend>
            <div className="filter__decor"></div>
            <ul className="filter__list">
              <Input asListItem={true}
                     liProps={{className: "filter__item"}}
                     inputProps={{className: "filter__checkbox visually-hidden", id: "1", name: "", type: "checkbox", value: ""}}
                     labelProps={{className: "filter__label filter__label--checkbox", htmlFor: "1", content: "Some item"}}/>

              <Input asListItem={true}
                     liProps={{className: "filter__item"}}
                     inputProps={{className: "filter__checkbox visually-hidden", id: "2", name: "", type: "checkbox", value: ""}}
                     labelProps={{className: "filter__label filter__label--checkbox", htmlFor: "2", content: "Some item"}}/>

              <Input asListItem={true}
                     liProps={{className: "filter__item"}}
                     inputProps={{className: "filter__checkbox visually-hidden", id: "3", name: "", type: "checkbox", value: ""}}
                     labelProps={{className: "filter__label filter__label--checkbox", htmlFor: "3", content: "Some item"}}/>

              <Input asListItem={true}
                     liProps={{className: "filter__item"}}
                     inputProps={{className: "filter__checkbox visually-hidden", id: "4", name: "", type: "checkbox", value: ""}}
                     labelProps={{className: "filter__label filter__label--checkbox", htmlFor: "4", content: "Some item"}}/>

            </ul>
          </fieldset>
        </details>
        <Button btnProps={{className: "filter__button", content: "Apply Filter", type: "submit"}}/>
      </form>
    </aside>
  )
}
