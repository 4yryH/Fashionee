import React from 'react';
import Select, { components } from 'react-select';
import SortIcon from '../../../assets/icons/sort-icon.svg?react';
import './SortSelect.css';

// сортировка товаров в shop через выпадающий список
const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <SortIcon className="sort-select__custom-indicator" />
  </components.DropdownIndicator>
);

export function SortSelect({ options, value, onChange }) {
  const selectedOption = options.find((opt) => opt.value === value) || null;

  return (
    <Select
      className="sort-select"
      classNamePrefix="sort-select" // префикс для внутренней BEM-семантики
      id="sort"
      options={options}
      value={selectedOption}
      onChange={(option) => onChange(option.value)}
      isSearchable={false} // убрать поиск, если не нужен
      // убираем сепаратор между иконкой и селект, ставим свою иконку
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
      }}
      // перебить базовый инлайн стиль
      styles={{
        control: () => ({}),
        menu: () => ({}),
        option: () => ({}),
        singleValue: () => ({}),
        indicatorSeparator: () => ({}),
        dropdownIndicator: () => ({}),
      }}
    />
  );
}
