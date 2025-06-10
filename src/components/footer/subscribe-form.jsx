import React from 'react';
import SendIcon from "../../assets/icons/send.svg?react"
import "./subscribe-form.css"

export function SubscribeForm() {
  return (
    <form className="footer__form">
      <label htmlFor="footer__subscribe-email" className="visually-hidden">
        Subscribe
      </label>
      <input
        className="footer__input"
        id="footer__subscribe-email"
        name="subscribe-email"
        placeholder="Enter your email"
        type="email"
      />
      <button className="footer__button" type="submit">
        <SendIcon className="footer__button-icon" width={24} height={24} />
      </button>
    </form>
  )
}