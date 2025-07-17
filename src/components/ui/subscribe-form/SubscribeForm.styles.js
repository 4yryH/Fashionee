import styled from 'styled-components';
import SendIcon from '../../../assets/icons/send.svg?react';
import { theme } from '../../../styles/theme.js';

const { colorRed, colorBorder, fontPrimary } = theme.helpers;

export const Form = styled.form`
  display: flex;
  border-bottom: 1px solid ${colorBorder};
`;

export const LabelHidden = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Input = styled.input`
  border: none;
  font-family: ${fontPrimary};
  height: 35px;
  padding: 2px 4px;
  flex-grow: 1;

  &:hover {
    background-color: ${colorBorder};
  }
`;

export const SubmitIcon = styled(SendIcon)`
  width: 24px;
  height: 24px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover ${SubmitIcon} path {
    stroke: ${colorRed};
  }
`;
