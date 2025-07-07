// логика фильтра
export function filterProducts(products, filters) {
  return products.filter((product) => {
    // ручной поиск по названию
    const matchSearch =
      !filters.search || // если пусто, то пропуск
      product.name.toLowerCase().includes(filters.search.toLowerCase()); // сравнение в нижнем регистре

    // по категориям
    const matchCategory =
      filters.category === 'all' ||
      (Array.isArray(product.categories) &&
        product.categories.some(
          (c) => c.toLowerCase() === filters.category.toLowerCase()
        ));

    // фильтр по цене
    const matchPrice =
      product.price >= filters.price[0] && product.price <= filters.price[1];

    // фильтр по цвету
    const matchColor =
      filters.colors.length === 0 ||
      filters.colors.includes(product.color?.toLowerCase());

    return matchCategory && matchPrice && matchColor && matchSearch;
  });
}
