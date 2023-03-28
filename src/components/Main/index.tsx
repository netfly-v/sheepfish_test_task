import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import {route} from '../../constants/route';
import {Product} from '../../constants/types';
import {AppStateType} from '../../store';
import {getProductsSelectorByCategory} from '../../store/state/products/selectors';
import {Text} from '../../ui-kit/Typography/Text';
import ProductCard from '../ProductCard';
import {MainWrapper, CardContentWrapper, NoGoodsWrapper, TableViewButton} from './styles';
import {TableView} from './TableView';

type MainPageProps = {
  getProductsByCategory: (v: string) => Product[];
};

const MainPage: React.FC<MainPageProps> = ({getProductsByCategory}) => {
  const [isTable, setIsTable] = useState<boolean>(false);
  const {categoryName} = useParams();
  const products = getProductsByCategory(categoryName || '');

  const navigate = useNavigate();

  const openProductDetails = (productId: number) => {
    navigate(`${route.home}product/${productId}`);
  };

  const onChangeViewMode = () => setIsTable((prev) => !prev);

  return (
    <MainWrapper>
      <TableViewButton onClick={onChangeViewMode}>
        <Text size={'medium'} color={'darkGray'}>
          {isTable ? 'View in cards mode' : 'View in table mode'}
        </Text>
      </TableViewButton>
      {isTable ? (
        <TableView data={products} />
      ) : (
        <CardContentWrapper>
          {products.length ? (
            products.map((product) => (
              <ProductCard product={product} openProductDetails={openProductDetails} key={product.id} />
            ))
          ) : (
            <NoGoodsWrapper>
              <Text size={'large'}>No goods in this category</Text>
            </NoGoodsWrapper>
          )}
        </CardContentWrapper>
      )}
    </MainWrapper>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const getProductsByCategory = (categoryName: string) => getProductsSelectorByCategory(state, categoryName);

  return {
    getProductsByCategory,
  };
};

export default connect(mapStateToProps)(MainPage);
