import React from 'react';
import {
  Fieldset,
  Input,
  Label,
  Legend,
  SearchWrapper,
  StyledSearchIcon,
} from './SearchFilter.styles.js';

// элемент поиска для блока фильтров
export function SearchFilter({ onChange, value }) {
  return (
    <Fieldset>
      <Legend>Search</Legend>
      <SearchWrapper>
        <Input
          type="text"
          name={'search'}
          placeholder={'Search'}
          id={'search'}
          value={value}
          onChange={onChange}
        />
        <StyledSearchIcon />
        <Label htmlFor={'search'}>Search</Label>
      </SearchWrapper>
    </Fieldset>
  );
}
