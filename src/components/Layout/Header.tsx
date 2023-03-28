import React, {useState} from 'react';
import {
  HeaderWrapper,
  LogoWrapper,
  LogoButton,
  LogoImg,
  CartWrapper,
  CartButton,
  CartImg,
  SearchButton,
  SearchInput,
  SearchWrapper,
  ClearButton,
  AddButton,
} from './styles';
import logo from '../../ui-kit/assets/logo.png';
import cart from '../../ui-kit/assets/cart.jpeg';
import {useNavigate} from 'react-router-dom';
import {route} from '../../constants/route';
import {Text} from '../../ui-kit/Typography/Text';
import {connect} from 'react-redux';
import {searchProductThunk} from '../../store/thunks/productsThunk';

const Header: React.FC<{searchProduct: any}> = ({searchProduct}) => {
  const navigate = useNavigate();
  const goToHomePage = () => navigate(route.home);
  const goToAddPage = () => navigate(route.addProduct);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSetQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const onSearch = () => {
    searchProduct(searchQuery);
  };

  const onClear = () => {
    searchProduct('');
  };

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoButton onClick={goToHomePage}>
          <LogoImg src={logo} alt="logo" />
        </LogoButton>
      </LogoWrapper>
      <SearchWrapper>
        <SearchInput onChange={handleSetQuery} />
        <SearchButton onClick={onSearch}>
          <Text size="medium">Search</Text>
        </SearchButton>
        <ClearButton onClick={onClear}>
          <Text size="medium">Clear</Text>
        </ClearButton>
        <AddButton onClick={goToAddPage}>
          <Text size="large" color={'darkGray'}>
            Add new product
          </Text>
        </AddButton>
      </SearchWrapper>
      <CartWrapper>
        <CartButton>
          <CartImg src={cart} alt="cart img" />
        </CartButton>
      </CartWrapper>
    </HeaderWrapper>
  );
};

const mapDispatchToProps = {
  searchProduct: searchProductThunk,
};

export default connect(null, mapDispatchToProps)(Header);
