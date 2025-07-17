import styled from 'styled-components';
import DeployIcon from '../../assets/icons/deploy-icon.svg?react';
import CheckboxIcon from '../../assets/icons/check-mark.svg?url';
import { theme } from '../../styles/theme.js';

const {
  colorText,
  colorTitles,
  colorRed,
  colorWhite,
  fontPrimary,
  fontSecondary,
} = theme.helpers;

export const FilterContainer = styled.aside``;

export const TitleHidden = styled.h2`
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

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const FilterFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FilterLegend = styled.legend`
  font-family: ${fontSecondary};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  color: ${colorTitles};
  border-bottom: 2px solid ${colorTitles};
  width: 100%;
  padding-bottom: 14px;
`;

export const AdditionalLegend = styled(FilterLegend)`
  font-family: ${fontSecondary};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  color: ${colorTitles};
  border-bottom: 2px solid ${colorTitles};
  width: 100%;
  padding-bottom: 14px;
  padding-top: 24px;
`;

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledDeployIcon = styled(DeployIcon)``;

export const ButtonApply = styled.button`
  border: none;
  width: 100%;
  min-height: 50px;
  background-color: ${colorTitles};
  font-family: ${fontPrimary};
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: ${colorWhite};
  position: relative;
  top: -15px;
  cursor: pointer;

  &:hover {
    background-color: ${colorRed};
  }

  &::after {
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    right: 2px;
    top: 0;
    background-color: ${colorWhite};
  }
`;

export const FilterItem = styled.li`
  position: relative;
`;
//стили для радио-кнопок и лейбл
export const InputRadio = styled.input`
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

  & + label::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 20px;
    translate: 0 -50%;
    width: 5px;
    height: 5px;
    background-color: ${colorText};
  }

  &:checked + label::before {
    display: none;
  }

  &:checked + label::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(50%);
    width: 25px;
    height: 2px;
    background-color: ${colorRed};
  }

  &:checked + label {
    color: ${colorRed};
    padding-left: 56px;
  }
`;

export const LabelRadio = styled.label`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: ${colorText};
  padding-left: 40px;
  cursor: pointer;

  &:hover {
    color: ${colorRed};
  }
`;

// Стили для чекбокс
export const InputCheckbox = styled.input`
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

  & + label::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border: 1px solid ${colorText};
    opacity: 0.2;
  }

  &:checked + label::after {
    content: '';
    position: absolute;
    display: block;
    width: 10px;
    height: 8px;
    top: 50%;
    transform: translateY(-50%);
    left: 23px;
    background-image: url('${CheckboxIcon}');
  }
`;

export const LabelCheckbox = styled.label`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: ${colorText};
  padding-left: 47px;
  cursor: pointer;

  &:hover {
    color: ${colorRed};
  }
`;
