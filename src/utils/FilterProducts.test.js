import productsData from '../data/Products.json';
import { filterProducts } from './FilterProducts.js';

const productsList = productsData.products;

// тест по цветам
describe('Products filter by colors', () => {
  // тест по одному цвету
  const keyColors = [
    ['red'],
    ['blue'],
    ['black'],
    ['yellow'],
  ];

  test.each(keyColors)('filtered color by %s', (color) => {
    const filters = {
      search: '',
      category: 'all',
      price: [0, Infinity],
      colors: [color],
    };

    const projectResult = filterProducts(productsList, filters);
    const filteredByColor = productsList.filter((product) =>
      product.color.toLowerCase() === color.toLowerCase());

    console.log('Результат теста: ', color, filteredByColor.length);
    console.log('Результат из проекта: ', color, projectResult.length);

    expect(projectResult).toEqual(filteredByColor);
  });

  // тест, если выбрано несколько цветов
  const keyMultipleColors = [
    [['red', 'blue']],
    [['blue', 'black']],
    [['black', 'yellow']],
    [['yellow', 'red', 'black']],
  ];

  test.each(keyMultipleColors)('filtered by combined colors %j', (colors) => {
    const filters = {
      search: '',
      category: 'all',
      price: [0, Infinity],
      colors: colors,
    };

    const projectResult = filterProducts(productsList, filters);
    const filteredByColor = productsList.filter((product) => colors.includes((product.color).toLowerCase()));

    console.log('Результат теста: ', colors, filteredByColor.length);
    console.log('Результат из проекта: ', colors, projectResult.length);

    expect(projectResult).toEqual(filteredByColor);
  });
});


// тест фильтра по категориям
describe('Products filter by categories', () => {
  const keyCategories = [
    'All',
    'Accessories',
    'Men',
    'Women',
  ];

  test.each(keyCategories)('filtered categories by %s', (cat) => {
    const filters = {
      search: '',
      category: cat,
      price: [0, Infinity],
      colors: [],
    };

    const projectResult = filterProducts(productsList, filters);
    const filteredByCategories = productsList.filter((product) =>
      Array.isArray(product.categories) && product.categories.some((categories) =>
        categories.toLowerCase() === cat.toLowerCase()));

    console.log('Результат теста: ', cat, filteredByCategories.length);
    console.log('Результат из проекта: ', cat, projectResult.length);

    expect(projectResult).toEqual(filteredByCategories);
  });
});


// тест по цене
describe('Products filter by prices', () => {
  const keyPrices = [
    [[0, 1000]],
    [[0, 50]],
    [[50, 100]],
    [[100, 500]],
  ];

  test.each(keyPrices)('filtered by prices %j', (prices) => {
    const filters = {
      search: '',
      category: 'all',
      price: prices,
      colors: [],
    };

    const projectResult = filterProducts(productsList, filters);
    const filteredByPrices = productsList.filter((product) => product.price >= prices[0] && product.price <= prices[1]);

    console.log('Результат теста: ', prices, filteredByPrices.length);
    console.log('Результат из проекта: ', prices, projectResult.length);

    expect(projectResult).toEqual(filteredByPrices);
  });
});


// Поиск по названию
describe('Products filter by search', () => {
  const keyWords = [
    'short',
    'shirt',
    'cap',
    'sk',
    'blouse',
    'b',
  ];

  test.each(keyWords)('filtered by search %s', (keyWord) => {
    const filters = {
      search: keyWord,
      category: 'all',
      price: [0, Infinity],
      colors: [],
    };

    const projectResult = filterProducts(productsList, filters);
    const filteredBySearch = productsList.filter((product) => product.name.toLowerCase().includes(keyWord.toLowerCase()));

    console.log('Результат теста: ', keyWord, filteredBySearch.length);
    console.log('Результат из проекта: ', keyWord, projectResult.length);

    expect(projectResult).toEqual(filteredBySearch);
  });
});
