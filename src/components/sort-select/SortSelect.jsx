import React from 'react';
import { components } from 'react-select';
import SortIcon from '../../assets/icons/sort-icon.svg?react';
import { StyledSortSelect } from './SortSelect.styles.js';

// сортировка товаров в shop через выпадающий список
const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <SortIcon />
  </components.DropdownIndicator>
);

export function SortSelect({ options, value, onChange }) {
  const selectedOption = options.find((opt) => opt.value === value) || null;

  return (
    <StyledSortSelect
      id="sort"
      options={options}
      value={selectedOption}
      onChange={(opt) => onChange(opt.value)}
      isSearchable={false}
      // у нас нет IndicatorSeparator
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
      }}
    />
  );
}
