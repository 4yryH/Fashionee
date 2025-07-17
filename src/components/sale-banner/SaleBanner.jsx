import React from 'react';
import {
  BannerContainer,
  Button,
  Description,
  Extra,
  Title,
} from './SaleBanner.styles.js';

// рекламный блок с баннером
export function SaleBanner() {
  return (
    <BannerContainer>
      <Title>
        Season <Extra>sale&nbsp;</Extra>
      </Title>
      <Description>
        Non aliqua reprehenderit
        <br />
        reprehenderit culpa
        <br />
        laboris nulla
      </Description>
      <Button type={'button'}>Shop now</Button>
    </BannerContainer>
  );
}
