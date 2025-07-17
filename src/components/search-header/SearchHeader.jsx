import React from 'react';
import {
  Button,
  SearchListItem,
  StyledSearchIcon,
} from './SearchHeader.styles.js';

// поиск в хедере, пока без логики, только иконка
export function SearchHeader() {
  return (
    <SearchListItem>
      <Button>
        <StyledSearchIcon />
      </Button>
    </SearchListItem>
  );
}
