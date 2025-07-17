import React, { useEffect, useState, useMemo } from 'react';
import { SearchFilter } from '../search-filter/SearchFilter.jsx';
import { PriceSlider } from '../price-slider/PriceSlider.jsx';
import {
  FilterDecorWrapper,
  FilterDetails,
  FilterSummary,
} from '../favorite-header/FavoriteHeader.styles.js';
import {
  FilterContainer,
  FilterForm,
  FilterFieldset,
  FilterLegend,
  AdditionalLegend,
  FilterList,
  StyledDeployIcon,
  ButtonApply,
  TitleHidden,
  FilterItem,
  InputRadio,
  InputCheckbox,
  LabelRadio,
  LabelCheckbox,
} from './Filter.styles';

// фильтр товаров для страницы Shop
export function Filter({
  filters = {},
  onChange = () => {},
  priceRange,
  products = [],
}) {
  // деструктор из filters
  const { colors = [] } = filters;

  // состояния для категории, цены и цвета, эти фильтры будут работать по кнопке apply filter
  const [localCategory, setLocalCategory] = useState(filters.category || 'all');
  const [localPrice, setLocalPrice] = useState(priceRange || [0, 0]);
  const [localColors, setLocalColors] = useState(filters.colors || []);

  // если потрогать ренджи, то их состояние не будет сбрасываться при применении фильтра
  useEffect(() => {
    if (filters.price == null && priceRange?.length === 2) {
      setLocalPrice(priceRange);
    }
    setLocalColors(colors);
  }, [filters.price, priceRange, colors]);

  // обработчик поиска
  const handleSearchChange = (e) => {
    onChange({ ...filters, search: e.target.value });
  };

  // обработчик радио-кнопок категорий
  const handleCategoryChange = (e) => {
    setLocalCategory(e.target.value);
  };

  // обработчик чек-боксов цветов
  const handleColorChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    const updatedColors = isChecked
      ? [...localColors, value]
      : localColors.filter((c) => c !== value);

    setLocalColors(updatedColors);
  };

  // обработчик для слайдера с ценой
  const handlePriceChange = (range) => {
    setLocalPrice(range);
  };

  // обработчик кнопки apply filter
  const handleApply = () => {
    onChange({
      ...filters,
      category: localCategory,
      price: localPrice,
      colors: localColors,
    });
  };

  // доступные категории из списка продуктов
  const uniqueCategories = useMemo(() => {
    const set = new Set();
    products.forEach((p) => {
      if (Array.isArray(p.categories)) {
        p.categories.forEach((c) => set.add(c.toLowerCase()));
      }
    });

    return ['all', ...Array.from(set).sort()];
  }, [products]);

  // доступные цвета из списка продуктов
  const uniqueColors = useMemo(() => {
    const set = new Set();
    products.forEach((p) => {
      if (p.color) set.add(p.color.toLowerCase());
    });
    return Array.from(set).sort();
  }, [products]);

  return (
    <FilterContainer>
      <TitleHidden>filter</TitleHidden>
      {/*у формы отмена действия по умолчанию, что бы не перезагружать страницу*/}
      <FilterForm onSubmit={(e) => e.preventDefault()}>
        <SearchFilter
          value={filters.search || ''}
          onChange={handleSearchChange}
        />

        {/* категории */}
        <FilterFieldset>
          <FilterLegend>Categories</FilterLegend>
          <FilterDecorWrapper></FilterDecorWrapper>

          <FilterList>
            {uniqueCategories.map((cat) => (
              <FilterItem key={cat}>
                <InputRadio
                  id={cat}
                  type={'radio'}
                  value={cat}
                  name={'categories'}
                  checked={localCategory === cat}
                  onChange={handleCategoryChange}
                />

                <LabelRadio htmlFor={cat}>
                  {cat
                    .replace('-', ' ')
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </LabelRadio>
              </FilterItem>
            ))}
          </FilterList>
        </FilterFieldset>

        {/* слайдер с ценой */}
        <FilterFieldset>
          <FilterLegend>Price</FilterLegend>
          <FilterDecorWrapper>
            <PriceSlider
              min={Math.min(priceRange[0], priceRange[1])}
              max={Math.max(priceRange[0], priceRange[1])}
              step={0.01}
              values={localPrice}
              onChange={handlePriceChange}
            />
          </FilterDecorWrapper>
        </FilterFieldset>

        {/* чек-боксы с цветами */}
        <FilterFieldset>
          <FilterLegend>Colors</FilterLegend>
          <FilterDecorWrapper></FilterDecorWrapper>

          <FilterList>
            {uniqueColors.map((color) => (
              <FilterItem key={color}>
                <InputCheckbox
                  id={color}
                  name={'colors'}
                  type={'checkbox'}
                  value={color}
                  checked={localColors.includes(color)}
                  onChange={handleColorChange}
                />

                <LabelCheckbox htmlFor={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </LabelCheckbox>
              </FilterItem>
            ))}
          </FilterList>
        </FilterFieldset>
        {/*доп фильтр просто шаблон с чек-боксами*/}
        <FilterDetails>
          <FilterSummary>
            <StyledDeployIcon />
            Deploy
          </FilterSummary>

          <FilterFieldset>
            <AdditionalLegend>Additional filter</AdditionalLegend>
            <FilterDecorWrapper></FilterDecorWrapper>

            <FilterList>
              {[1, 2, 3, 4].map((id) => (
                <FilterItem key={id}>
                  <InputCheckbox
                    id={id}
                    name={'additional'}
                    type={'checkbox'}
                    value={id}
                  />

                  <LabelCheckbox htmlFor={id}>{id}</LabelCheckbox>
                </FilterItem>
              ))}
            </FilterList>
          </FilterFieldset>
        </FilterDetails>

        <ButtonApply type="button" onClick={handleApply}>
          Apply Filter
        </ButtonApply>
      </FilterForm>
    </FilterContainer>
  );
}
