import styled from 'styled-components';

export const BurgerCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  visibility: hidden;
`;

export const BurgerLabel = styled.label`
  cursor: pointer;
  display: block;
  position: relative;
  background: transparent;
  width: 22px;
  height: 14px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background: #000;
  }

  &::before {
    top: 7px;
    box-shadow: 0 -6px 0 #000;
    transition:
      box-shadow 0.3s 0.15s,
      top 0.3s 0.15s,
      transform 0.3s;
  }

  &::after {
    bottom: 0;
    transition:
      bottom 0.3s 0.15s,
      transform 0.3s;
  }

  /* Checked */
  ${BurgerCheckbox}:checked + &::before {
    top: 4px;
    transform: rotate(45deg);
    box-shadow: 0 6px 0 transparent;
    transition:
      box-shadow 0.15s,
      top 0.3s,
      transform 0.3s 0.15s;
  }

  ${BurgerCheckbox}:checked + &::after {
    bottom: 8px;
    transform: rotate(-45deg);
    transition:
      bottom 0.3s,
      transform 0.3s 0.15s;
  }
`;
