import React, { useState } from 'react';
import socialData from '../../data/SocialData.json';
import { SocialList } from '../ui/social-list/SocialList.jsx';
import { getDiscountForCode } from '../../utils/promoCodeUtils.js';
import {
  Button,
  Description,
  DescriptionWrapper,
  Form,
  Input,
  Label,
  PromoCodeContainer,
  SocialContainer,
  StyledButtonIcon,
  Subtitle,
  Title,
} from './PromoCode.styles.js';

// блок с вводом промокода
export function PromoCode({ onApply }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const discount = getDiscountForCode(input);
    onApply(discount === null ? 0 : discount, input.trim());
    setInput('');
  };

  return (
    <PromoCodeContainer>
      <DescriptionWrapper>
        <Title>You have a promo code?</Title>
        <Description>
          To receive up-to-date promotional codes, subscribe to us on social
          networks.
        </Description>
      </DescriptionWrapper>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="promo-code">Promo code</Label>
        <Input
          id="promo-code"
          name="promo-code"
          placeholder="Enter promo code"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">
          <StyledButtonIcon />
        </Button>
      </Form>
      <SocialContainer>
        <Subtitle>Find us here:</Subtitle>
        <SocialList items={socialData} />
      </SocialContainer>
    </PromoCodeContainer>
  );
}
