import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import {
  SliderContainer,
  Track,
  Thumb,
  PriceSliderGlobalStyles,
} from './PriceSlider.styles.js';

// слайдер для фильтра цен, хрупкий однако
export function PriceSlider({
  min = 0,
  max = 500,
  step = 1,
  values = [min, max],
  onChange,
}) {
  return (
    <>
      <PriceSliderGlobalStyles />

      <SliderContainer>
        <PriceSliderGlobalStyles />
        <Range
          values={values}
          step={step}
          min={min}
          max={max}
          onChange={onChange}
          renderTrack={({ props, children }) => (
            <Track
              {...props}
              style={{
                ...props.style,
                background: getTrackBackground({
                  values,
                  colors: ['#999', '#ff8e8e', '#999'],
                  min,
                  max,
                }),
              }}
            >
              {children}
            </Track>
          )}
          renderThumb={({ index, props }) => {
            const { key, ...thumbProps } = props;
            return (
              <Tooltip
                key={index}
                overlay={`$${values[index].toFixed(2)}`}
                placement="top"
                visible={true}
                trigger={[]}
              >
                <Thumb {...thumbProps} />
              </Tooltip>
            );
          }}
        />
      </SliderContainer>
    </>
  );
}
