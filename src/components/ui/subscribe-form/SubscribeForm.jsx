import React from 'react';
import {
  Button,
  Form,
  Input,
  LabelHidden,
  SubmitIcon,
} from './SubscribeForm.styles.js';

// элемент отправки почты для подписки
export function SubscribeForm() {
  return (
    <Form>
      <LabelHidden htmlFor="footer__subscribe-email">Subscribe</LabelHidden>
      <Input
        id="footer__subscribe-email"
        name="subscribe-email"
        placeholder="Enter your email"
        type="email"
      />
      <Button type="submit">
        <SubmitIcon />
      </Button>
    </Form>
  );
}
