import React from "react";
import {Range, getTrackBackground} from "react-range";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import "./price-slider.css";

// слайдер для фильтра цен, хрупкий однако
export function PriceSlider({
                              min = 0,
                              max = 500,
                              step = 1,
                              values = [min, max],
                              onChange
                            }) {
  return (
    <div className="price-slider">
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={onChange}

        renderTrack={({props, children}) => {
          const {key, ...restTrackProps} = props;
          return (
            <div
              {...restTrackProps}
              className="price-slider__track"
              style={{
                ...restTrackProps.style,
                background: getTrackBackground({
                  values,
                  colors: ["#999", "#ff8e8e", "#999"],
                  min,
                  max
                })
              }}
            >
              {children}
            </div>
          )
        }}

        renderThumb={({index, props}) => {
          const {key, ...restThumbProps} = props;
          return (
            <Tooltip
              key={index}
              overlay={`$${values[index].toFixed(2)}`}
              placement="top"
              visible={true}
              trigger={[]}
            >
              <div
                {...restThumbProps}
                className="price-slider__thumb"
              />
            </Tooltip>
          )
        }}
      />
    </div>
  );
}
