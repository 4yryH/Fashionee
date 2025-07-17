import styled from 'styled-components';
import DropdownsIcon from '../../assets/icons/dropdowns.svg?react';
import { theme } from '../../styles/theme.js';

const { colorText, colorTitles, colorWhite, fontPrimary } = theme.helpers;

export const StyledDropdownIcon = styled(DropdownsIcon)``;

export const HeaderContainer = styled.header`
  max-width: 1800px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto 0;
`;

export const LeftSide = styled.div`
  display: flex;
  gap: 66px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const Navigation = styled.nav``;

export const RightSide = styled.div`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const UserMenuList = styled.ul`
  display: flex;
  gap: 40px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  position: relative;
`;

export const NavLink = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})`
  font-family: ${fontPrimary};
  color: ${(props) =>
    props.isActive ? props.theme.colors.red : props.theme.colors.text};
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  & svg path {
    stroke: ${(props) =>
      props.isActive ? props.theme.colors.red : props.theme.colors.text};
  }

  &:hover {
    color: ${(props) => props.theme.colors.red};
  }

  &:hover svg path {
    stroke: ${(props) => props.theme.colors.red};
  }
`;

export const StyledDropdownList = styled.ul`
  position: absolute;
  z-index: 2;
  left: -40px;
  top: 40px;
  padding: 24px 0;
  margin: 0;
  list-style: none;
  background-color: ${colorWhite};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
`;

export const DropdownLink = styled.button`
  font-family: ${fontPrimary};
  color: ${colorText};
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  padding: 9px 40px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(149, 204, 181, 0.2);
    color: ${colorTitles};
  }
`;
