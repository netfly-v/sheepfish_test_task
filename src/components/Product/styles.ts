import styled from 'styled-components';
import {Text} from '../../ui-kit/Typography/Text';

export const ProductPageWrapper = styled.div`
  padding: 30px 150px;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const GetBackButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export const BackImg = styled.img`
  height: 50px;
`;

export const ProductContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const ProductImg = styled.img`
  object-fit: contain;
  width: 500px;
  flex-shrink: 0;
  height: 250px;
  display: block;
  margin: 0 auto;
`;

export const ContentRightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledDescription = styled(Text)`
  font-style: italic;
  margin-left: 20px;
`;

export const BuyBlockWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CartButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const CartImg = styled.img`
  display: flex;
  height: 100px;
`;
