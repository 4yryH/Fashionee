import styled from 'styled-components';
import UserIcon from '../../assets/icons/user.svg?react';
import { theme } from '../../styles/theme.js';

const { colorRed } = theme.helpers;

export const UserListItem = styled.li``;

export const StyledUserIcon = styled(UserIcon)`
  width: 20px;
  height: 20px;
`;

export const Button = styled.button`
  display: flex;
  gap: 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover ${StyledUserIcon} path {
    fill: ${colorRed};
  }
`;
