import React from "react";
import { Range, getTrackBackground } from "react-range";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import "./price-slider.css";

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

        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="price-slider__track"
            style={{
              ...props.style,
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
        )}

        renderThumb={({ index, props }) => (
          <Tooltip
            overlay={`$${values[index].toFixed(2)}`}
            placement="top"
            visible={true}
            trigger={[]}
            key={index}
          >
            <div
              {...props}
              className="price-slider__thumb"
              // style={props.style}
            />
          </Tooltip>
        )}
      />
    </div>
  );
}
