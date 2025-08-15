import {screen, fireEvent, within } from '@testing-library/react';
import { renderWithProviders } from './test-utils.jsx';
import App from '../App.jsx';

/**
 * Кейс проверяет связь между компонентами при нажатии кнопок на карточке товара
 * и изменения количества товара в корзине в шапке
 * Так же проверяет изменение кнопок на карточке, изначально отсутствуют
 * кнопки +/- на карточке и появляются после нажатия на buy
 */

test("Render of the product counter in the cart", () => {
  renderWithProviders(<App />);
  // поиск счетчика по id
  const cartCount = screen.getByTestId('cart-counter');
  // проверяем счетчик корзины, ожидаем 0
  expect(cartCount).toHaveTextContent("0");

//   поиск кнопки buy на карточке товара
//   Поиск заголовка на карточке
  const productTitle = screen.getAllByText('Warm casual sweater');

  // поиск родителя по названию
  const productContainer = productTitle[0].closest('div');

  // поиск самой кнопки в этом контейнере
  const productBuyButton = within(productContainer).getByRole('button')

  // Прожимаем кнопку buy
  fireEvent.click(productBuyButton);

  // проверяем счетчик корзины, ожидаем 1
  expect(cartCount).toHaveTextContent("1");

  // находим кнопку увеличения количества товара
  const productPlusButton = within(productContainer).getByText('+')

  // прожимаем дважды кнопку увеличить количество товара
  fireEvent.click(productPlusButton);
  fireEvent.click(productPlusButton);

  // проверяем счетчик корзины, ожидаем 3
  expect(cartCount).toHaveTextContent("3");

  // находим кнопку уменьшения количества товара
  const productMinusButton = within(productContainer).getByText('-')

  // прожимаем дважды кнопку уменьшить количество товара
  fireEvent.click(productMinusButton);

  // проверяем счетчик корзины, ожидаем 2
  expect(cartCount).toHaveTextContent("2");
})
