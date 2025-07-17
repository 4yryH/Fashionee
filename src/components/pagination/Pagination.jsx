import React, { useEffect, useState } from 'react';
import {
  PaginationContainer,
  PaginationList,
  PaginationButton,
  PrevIcon,
  NextIcon,
  PaginationLink,
} from './Pagination.styles.js';

export function Pagination({
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
    <PaginationContainer>
      <PaginationButton onClick={goPrevPage} disabled={currentPage === 1}>
        <PrevIcon />
      </PaginationButton>
      <PaginationList>
        {pagination.map((page) => (
          <PaginationLink
            key={page}
            isCurrent={page === currentPage}
            onClick={changePage(page)}
          >
            {page}
          </PaginationLink>
        ))}
      </PaginationList>
      <PaginationButton
        onClick={goNextPage}
        disabled={currentPage === totalPages}
      >
        <NextIcon />
      </PaginationButton>
    </PaginationContainer>
  );
}
