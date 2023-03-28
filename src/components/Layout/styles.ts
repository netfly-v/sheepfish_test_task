import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({theme}) => theme.palette.background.white};
`;

export const Main = styled.main`
  flex-grow: 1;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
`;

export const LogoWrapper = styled.div``;

export const LogoButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
`;

export const LogoImg = styled.img`
  height: 50px;
  cursor: pointer;
`;

export const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartButton = LogoButton;

export const CartImg = styled.img`
  height: 35px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.palette.background.aliceBlue};
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 100px;
`;

export const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: 50px;
  width: 150px;
  :active,
  :hover {
    background-color: ${({theme}) => theme.palette.background.aqua};
  }
`;
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 500px;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-right: 20px;
  font-size: 26px;
  font-family: Roboto;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  margin-right: 20px;
`;

export const ClearButton = SearchButton;

export const AddButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  span:hover {
    color: ${({theme}) => theme.palette.common.black};
  }
`;
