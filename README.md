# 🛍️ Fashionee Shop

Интернет-магазин, реализованный на React, с возможностью фильтрации товаров по категориям, цене, цвету и поиску. 

## 🚀 Возможности

- Фильтрация по категориям (Men, Women, Accessories и т.д.)
- Фильтрация по цене (ползунок)
- Фильтрация по цвету (чекбоксы)
- Поиск по названию товара
- Пагинация товаров
- Добавление товаров в корзину и избранное
- Адаптивный интерфейс

## Стек

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS-модули
- Компонентная архитектура

## Структура проекта

src/
├── assets/ # Шрифты, иконки
├── components/ # UI и логические компоненты
│ ├── filter/ # Панель фильтрации
│ ├── product-card/ # Карточка товара
│ ├── search-filter/ # Поле поиска
│ ├── ui/ # Повторно используемые UI-компоненты (Input, Button, Slider и т.д.)
├── pages/
│ └── shop/ # Страница магазина
├── utils/
│ └── filterProducts.js # Логика фильтрации
├── App.jsx
└── main.jsx

## Установка

```bash
git clone https://github.com/your-username/fashionee-shop.git
cd fashionee-shop
npm install
```
## Запуск
```bash
npm run dev
```
## Сборка
```bash
npm run build
```
