import React from 'react';
import { screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from './test-utils.jsx';
import App from '../App.jsx';

/**
 * Кейс проверяет связь между компонентами при нажатии
 * кнопки buy товар должен попасть в корзину. Далее переходи на страницу cart
 * проверка, что товар попал в корзину через повторный поиск по названию
 * ручной расчет цена * кол-во и сравнение с ордером
 */

test('add product to cart and calculation of the amount in the order', () => {
  renderWithProviders(<App />);

  // поиск кнопки buy на карточке товара
  // Поиск заголовка на карточке
  const productTitle = screen.getAllByText('Warm casual sweater');

  // поиск родителя по названию
  const productContainer = productTitle[0].closest('div');

  // поиск самой кнопки в этом контейнере
  const productBuyButton = within(productContainer).getByRole('button');

  // Прожимаем кнопку buy что бы товар попал в корзину
  fireEvent.click(productBuyButton);

  // находим кнопку со счетчиком для дальнейшего перехода в корзину
  const cartCountButton = screen.getByTestId('cart-counter-btn');

  // кликаем для перехода в корзину и рендера страницы
  fireEvent.click(cartCountButton);

  // Поиск в корзине
  const productTitleCart = screen.getAllByText('Warm casual sweater');

  const productContainerCart = productTitleCart[0].closest('div');

  // получение цены из карточки в корзине и обрезка первого символа $
  const productPriceCart = within(productContainerCart).getByTestId('cart-item-price').textContent.substring(1);

  const productQuantityCart = within(productContainerCart).getByTestId('cart-item-qty').textContent;

  // ручной расчет цена * количество
  const handleAmountProduct = productPriceCart * productQuantityCart;

  // получаем цену за товары в ордере
  const orderProductsPrice = Number(screen.getByTestId('order-price-products').textContent.substring(1));
  // проверяем расчет в ордере, ожидаем совпадение с ручным расчетом
  expect(orderProductsPrice).toEqual(handleAmountProduct);

  // находим кнопку увеличить кол-во товара
  const productQuantityCartPlus = within(productContainerCart).getByTestId('cart-item-qty-plus');

  // находим кнопку уменьшить кол-во товара
  const productQuantityCartMinus = within(productContainerCart).getByTestId('cart-item-qty-minus');
  // прожимаем увеличение товара
  fireEvent.click(productQuantityCartPlus);
  fireEvent.click(productQuantityCartPlus);
  // повторяем все действия для сравнения после увеличения количеств товара
  const productQuantityCartAfterPlus = within(productContainerCart).getByTestId('cart-item-qty').textContent;
  const handleAmountProductAfterPlus = Number((productPriceCart * productQuantityCartAfterPlus).toFixed(2));
  const orderProductsPriceAfterPlus = Number(screen.getByTestId('order-price-products').textContent.substring(1));

  // проверяем расчет в ордере, ожидаем совпадение с ручным расчетом
  expect(orderProductsPriceAfterPlus).toEqual(handleAmountProductAfterPlus);

  fireEvent.click(productQuantityCartMinus);
  // повторяем все действия для сравнения после уменьшения количеств товара
  const productQuantityCartAfterMinus = within(productContainerCart).getByTestId('cart-item-qty').textContent;
  const handleAmountProductAfterMinus = Number((productPriceCart * productQuantityCartAfterMinus).toFixed(2));
  const orderProductsPriceAfterMinus = Number(screen.getByTestId('order-price-products').textContent.substring(1));

  // проверяем расчет в ордере, ожидаем совпадение с ручным расчетом
  expect(orderProductsPriceAfterMinus).toEqual(handleAmountProductAfterMinus);
});
