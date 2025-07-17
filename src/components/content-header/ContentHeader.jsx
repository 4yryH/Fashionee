import React from 'react';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs.jsx';
import {
  ContentHeaderContainer,
  ContentWrapper,
  WrapperLeft,
  WrapperText,
  Title,
  ContentImage,
} from './ContentHeader.styles.js';

export function ContentHeader({
  title, // заголовок страницы прилетает из app.jsx
  breadcrumbItems = [], // массив крошек прилетает из app.jsx
}) {
  return (
    <ContentHeaderContainer>
      <ContentWrapper>
        <WrapperLeft>
          <WrapperText>
            {/*название страницы прилетает через пропс*/}
            <Title>{title}</Title>
            {/*хлебные крошки*/}
            <Breadcrumbs
              items={breadcrumbItems.map((item) =>
                typeof item === 'string' ? { label: item } : item
              )}
            />
          </WrapperText>
        </WrapperLeft>
        <ContentImage />
      </ContentWrapper>
    </ContentHeaderContainer>
  );
}
