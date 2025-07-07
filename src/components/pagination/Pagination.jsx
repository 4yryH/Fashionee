import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button/Button.jsx';
import PaginationIcon from '../../assets/icons/page-next-prev.svg?react';

import './Pagination.css';

export function Pagination({
  iconProps = {},
  totalPages,
  changePage,
  currentPage,
  goPrevPage,
  goNextPage,
}) {
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    // добавление списка страницы в массив с кнопками пагинации
    const tempPagination = [];

    for (let i = 0; i < totalPages; i++) {
      tempPagination.push(i + 1);
    }

    setPagination(tempPagination);
  }, [totalPages]);

  return (
    <nav className="pagination">
      <Button
        btnProps={{
          className: 'pagination__button pagination__button--prev',
          onClick: goPrevPage,
          disabled: currentPage === 1,
          content: (
            <PaginationIcon
              className={
                iconProps.className || 'pagination__icon pagination__icon-prev'
              }
              width={iconProps.width || 51}
              height={iconProps.height || 12}
            />
          ),
        }}
      />

      <ul className="pagination__list">
        {pagination.map((page) => (
          <Button
            key={page}
            asListItem
            liProps={{ className: 'pagination__item' }}
            btnProps={{
              className: `pagination__link ${currentPage === page ? 'pagination__link--current' : ''}`,
              content: page,
              onClick: changePage(page),
            }}
          />
        ))}
      </ul>
      <Button
        btnProps={{
          className: 'pagination__button pagination__button--next',
          onClick: goNextPage,
          disabled: currentPage === totalPages,
          content: (
            <PaginationIcon
              className={
                iconProps.className || 'pagination__icon pagination__icon-next'
              }
              width={iconProps.width || 51}
              height={iconProps.height || 12}
            />
          ),
        }}
      />
    </nav>
  );
}
