import React, { useState } from 'react';
import Select, { components } from 'react-select';
import './sort-select.css';
import SortIcon from '../../../assets/icons/sort-icon.svg?react';
import { sortSelectData as options } from '../../../data/sort-select-data.jsx';

// сортировка товаров в shop через выпадающий список
const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <SortIcon className="sort-select__custom-indicator" />
  </components.DropdownIndicator>
);

export function SortSelect() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Select
      className="sort-select" // ваш класс для обёртки
      classNamePrefix="sort-select" // префикс для внутренней BEM-семантики
      options={options}
      value={selected}
      onChange={setSelected}
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
