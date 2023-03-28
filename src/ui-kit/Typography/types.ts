export type TextBaseProps = {
  type?: TextType;
  variant?: 'primary' | 'secondary';
  weight?: 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';
  size?: number | SizeType;
  height?: number | HeightType;
  decoration?: 'underline' | 'none';
  case?: 'uppercase' | 'lowercase' | 'capitalize';
  color?: TextColor;
  children: React.ReactNode;
  onClick?: () => void;
};

export type TextType = 'small' | 'medium' | 'big' | 'large' | 'huge' | 'extra-huge';
export type SizeType = TextType;
export type HeightType = TextType;
export type TextColor = 'white' | 'black' | 'darkGray' | 'darkRed';
