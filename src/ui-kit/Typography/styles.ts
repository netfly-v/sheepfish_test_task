import {TextBaseProps} from './types';
import styled, {css} from 'styled-components';
import {defaultTheme as theme} from '../theme/theme';

const color = ({color}: TextBaseProps) => {
  return color ? theme.palette.text[color] : theme.palette.text.black;
};

const fontFamily = ({variant}: TextBaseProps) => {
  return `${!variant || variant === 'primary' ? 'Poppins' : 'Roboto'}`;
};

export const fontSize = ({size}: Partial<TextBaseProps>) => {
  if (typeof size === 'number') {
    return size + 'px';
  }
  switch (size) {
    case 'extra-huge':
      return '40px';
    case 'huge':
      return '26px';
    case 'large':
      return '20px';
    case 'big':
      return '16px';
    case 'medium':
      return '14px';
    case 'small':
      return '12px';
    default:
      return '12px';
  }
};

export const lineHeight = ({size}: Partial<TextBaseProps>) => {
  if (typeof size === 'number') {
    return size + 'px';
  }
  switch (size) {
    case 'extra-huge':
      return '60px';
    case 'huge':
      return '42px';
    case 'large':
      return '26px';
    case 'big':
      return '24px';
    case 'medium':
      return '20px';
    case 'small':
      return '18px';
    default:
      return '18px';
  }
};

const fontWeight = ({weight}: TextBaseProps) => {
  if (weight) {
    switch (weight) {
      case 'bold':
        return 700;
      case 'semi-bold':
        return 600;
      case 'medium':
        return 500;
      case 'regular':
        return 400;
      default:
        return 400;
    }
  }
};

const fontCase = ({case: _case}: TextBaseProps) => {
  return _case ? {textTransform: _case} : {};
};

const textDecoration = ({decoration}: TextBaseProps) => {
  return decoration ? decoration : 'none';
};

const styles = css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  text-decoration: ${textDecoration};
  line-height: ${lineHeight};
  ${fontCase};
`;

export const StyledText = styled.span<TextBaseProps>`
  ${styles};
  color: ${color};
`;
