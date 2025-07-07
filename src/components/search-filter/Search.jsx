import React from 'react';
import SearchIcon from '../../assets/icons/search.svg?react';
import './Search.css';

// элемент поиска для блока фильтров
export function Search({ onChange, value }) {
  return (
    <fieldset className={'filter__fieldset'}>
      <legend className={'visually-hidden'}>{'Search'}</legend>
      <div className={'filter__search-wrapper'}>
        <input
          type="text"
          className={'filter__search'}
          name={'search'}
          placeholder={'Search'}
          id={'search'}
          value={value}
          onChange={onChange}
        />
        <SearchIcon width={18} height={18} className={'filter__search-icon'} />
        <label className={'visually-hidden'} htmlFor={'search'}>
          {'Search'}
        </label>
      </div>
    </fieldset>
  );
}
