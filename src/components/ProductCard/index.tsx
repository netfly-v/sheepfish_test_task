import {Rating} from '../../../node_modules/@mui/material/index';
import React from 'react';
import {
  ProductCardWrapper,
  ProductTitleWrapper,
  ProductNameButton,
  ProductName,
  DelButton,
  ProductImg,
  ProductCategory,
  RatingWrapper,
  ProductStock,
  Description,
  PriceBlock,
  ProductPrice,
} from './styles';
import {Product} from '../../constants/types';
import {Text} from '../../ui-kit/Typography/Text';
import {deleteProductThunk} from '../../store/thunks/productsThunk';
import {connect} from 'react-redux';
import {ToastContainer} from 'react-toastify';

type ProductCardProps = {
  product: Product;
  openProductDetails: (v: number) => void;
  delProduct: (id: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({product, openProductDetails, delProduct}) => {
  const onDelete = () => {
    delProduct(product.id);
  };
  return (
    <ProductCardWrapper>
      <ProductTitleWrapper>
        <ProductNameButton onClick={() => openProductDetails(product.id)}>
          <ProductName size={'medium'}>{product.title}</ProductName>
        </ProductNameButton>
        <DelButton onClick={onDelete}>
          <Text size={'huge'} color="darkRed">
            x
          </Text>
        </DelButton>
      </ProductTitleWrapper>

      <ProductImg src={product.thumbnail} alt="product img" />
      <ProductCategory size={13} decoration={'underline'}>
        {product.category}
      </ProductCategory>
      <RatingWrapper>
        <Rating name="read-only" defaultValue={product.rating} precision={0.5} size="small" readOnly />
        <ProductStock size={10} color={'darkGray'}>
          Stock: {product.stock} pcs
        </ProductStock>
      </RatingWrapper>
      <Description size={11}>{product.description}</Description>
      <PriceBlock>
        <ProductPrice size={'large'} weight={'bold'} color={'darkRed'}>
          {product.price} $
        </ProductPrice>
      </PriceBlock>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </ProductCardWrapper>
  );
};

const mapDispatchToProps = {
  delProduct: deleteProductThunk,
};

export default connect(null, mapDispatchToProps)(ProductCard);
