import React, { useEffect, useState, useMemo } from 'react';
import { Title } from '../ui/title/title.jsx';
import { Input } from '../ui/input/input.jsx';
import { Button } from '../ui/button/button.jsx';
import { Search } from '../search-filter/search.jsx';
import { PriceSlider } from '../ui/price-slider/price-slider.jsx';
import DeployIcon from '../../assets/icons/deploy-icon.svg?react';
import './filter.css';

// фильтр товаров для страницы Shop
export function Filter({
  filters = {},
  onChange = () => {},
  priceRange,
  products = [],
}) {
  // деструктор из filters
  const { category = 'all', colors = [] } = filters;

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
    <aside className="filter">
      {/*Заголовок скрыт, виден только скрин-ридерам*/}
      <Title content="filter" className="visually-hidden" />
      {/*у формы отмена действия по умолчанию, что бы не перезагружать страницу*/}
      <form className="filter__form" onSubmit={(e) => e.preventDefault()}>
        <Search value={filters.search || ''} onChange={handleSearchChange} />

        {/* категории */}
        <fieldset className="filter__fieldset filter__fieldset--categories">
          <legend className="filter__legend">Categories</legend>
          <div className="filter__decor"></div>
          <ul className="filter__list">
            {uniqueCategories.map((cat) => (
              <Input
                key={cat}
                asListItem={true}
                liProps={{ className: 'filter__item' }}
                inputProps={{
                  className: 'filter__radio visually-hidden',
                  id: cat,
                  name: 'categories',
                  type: 'radio',
                  value: cat,
                  checked: localCategory === cat,
                  onChange: handleCategoryChange,
                }}
                labelProps={{
                  className: 'filter__label',
                  htmlFor: cat,
                  content: cat
                    .replace('-', ' ')
                    .replace(/\b\w/g, (l) => l.toUpperCase()),
                }}
              />
            ))}
          </ul>
        </fieldset>

        {/* слайдер с ценой */}
        <fieldset className="filter__fieldset filter__fieldset--price">
          <legend className="filter__legend">Price</legend>
          <div className="filter__decor">
            <PriceSlider
              min={Math.min(priceRange[0], priceRange[1])}
              max={Math.max(priceRange[0], priceRange[1])}
              step={0.01}
              values={localPrice}
              onChange={handlePriceChange}
            />
          </div>
        </fieldset>

        {/* чек-боксы с цветами */}
        <fieldset className="filter__fieldset filter__fieldset--colors">
          <legend className="filter__legend">Colors</legend>
          <div className="filter__decor"></div>
          <ul className="filter__list">
            {uniqueColors.map((color) => (
              <Input
                key={color}
                asListItem={true}
                liProps={{ className: 'filter__item' }}
                inputProps={{
                  className: 'filter__checkbox visually-hidden',
                  id: color,
                  name: 'colors',
                  type: 'checkbox',
                  value: color,
                  checked: localColors.includes(color),
                  onChange: handleColorChange,
                }}
                labelProps={{
                  className: 'filter__label filter__label--checkbox',
                  htmlFor: color,
                  content: color.charAt(0).toUpperCase() + color.slice(1),
                }}
              />
            ))}
          </ul>
        </fieldset>
        {/*доп фильтр просто шаблон с чек-боксами*/}
        <details className="filter__details">
          <summary className="filter__summary">
            <DeployIcon />
            Deploy
          </summary>
          <fieldset className="filter__fieldset">
            <legend className="filter__legend filter__legend--additional">
              additional filter
            </legend>
            <div className="filter__decor"></div>
            <ul className="filter__list">
              {[1, 2, 3, 4].map((id) => (
                <Input
                  key={id}
                  asListItem={true}
                  liProps={{ className: 'filter__item' }}
                  inputProps={{
                    className: 'filter__checkbox visually-hidden',
                    id: String(id),
                    name: '',
                    type: 'checkbox',
                    value: '',
                  }}
                  labelProps={{
                    className: 'filter__label filter__label--checkbox',
                    htmlFor: String(id),
                    content: 'Some item',
                  }}
                />
              ))}
            </ul>
          </fieldset>
        </details>

        <Button
          btnProps={{
            className: 'filter__button',
            content: 'Apply Filter',
            type: 'button',
            onClick: handleApply,
          }}
        />
      </form>
    </aside>
  );
}
