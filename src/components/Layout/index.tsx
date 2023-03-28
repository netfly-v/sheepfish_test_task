import React, {PropsWithChildren, useEffect} from 'react';
import {connect} from 'react-redux';
import {getAllProductsThunk} from '../../store/thunks/productsThunk';
import {Footer} from './Footer';
import Header from './Header';
import Menu from './Menu';
import {StyledLayout, Main} from './styles';

type AppLayoutProps = {
  getAllProducts: () => void;
};

const AppLayout: React.FC<PropsWithChildren & AppLayoutProps> = ({children, getAllProducts}) => {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <StyledLayout>
      <Header />
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  );
};

const mapDispatchToProps = {
  getAllProducts: getAllProductsThunk,
};

export default connect(null, mapDispatchToProps)(AppLayout);
