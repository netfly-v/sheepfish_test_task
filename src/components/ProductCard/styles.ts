import styled from 'styled-components';
import {Text} from '../../ui-kit/Typography/Text';

export const ProductCardWrapper = styled.div`
  border: 1px solid ${({theme}) => theme.palette.background.white};
  margin: 30px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ProductTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DelButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ProductNameButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
`;

export const ProductName = styled(Text)`
  text-align: center;
  padding: 20px 5px;
  cursor: pointer;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductCategory = styled(Text)`
  margin-left: 20px;
  padding: 10px 0;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -3px;
`;

export const ProductStock = styled(Text)`
  margin-left: 10px;
`;

export const Description = styled(Text)`
  margin: 5px 20px 0;
  font-style: italic;
  flex-grow: 1;
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;

export const ProductPrice = styled(Text)`
  margin-left: 20px;
`;
