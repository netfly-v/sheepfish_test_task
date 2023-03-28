import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {
  ProductPageWrapper,
  ProductHeader,
  GetBackButton,
  BackImg,
  ProductContentWrapper,
  ProductImg,
  ContentRightSideWrapper,
  StyledDescription,
  BuyBlockWrapper,
  CartButton,
  CartImg,
} from './styles';
import backImg from '../../ui-kit/assets/back.png';
import addToCartImg from '../../ui-kit/assets/addToCart.png';
import {productsAPI} from '../../api/products';
import {route} from '../../constants/route';
import {Text} from '../../ui-kit/Typography/Text';
import {Product} from '../../constants/types';

export const ProductPage: React.FC = () => {
  const {productId} = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    productId && productsAPI.getProduct(productId).then(setProduct);
  }, []);

  const getBack = () => {
    navigate(`${route.home}category/${product?.category}`);
  };

  return product ? (
    <ProductPageWrapper key={product.id}>
      <ProductHeader>
        <Text size={'big'} color={'darkGray'}>
          {product.category}
        </Text>
        <Text size={32} weight={'bold'}>
          {product.title}
        </Text>
        <GetBackButton onClick={getBack}>
          <BackImg src={backImg} alt="back GetBackButton" />
        </GetBackButton>
      </ProductHeader>
      <ProductContentWrapper>
        <ProductImg src={product.thumbnail} alt="product img" />
        <ContentRightSideWrapper>
          <StyledDescription size={'medium'}>{product.description}</StyledDescription>
          <BuyBlockWrapper>
            <Text size={80} color={'darkRed'}>
              {product.price} $
            </Text>
            <CartButton
              onClick={() => {
                console.log('added to cart');
              }}>
              <CartImg src={addToCartImg} alt="cart" />
              Add to cart
            </CartButton>
          </BuyBlockWrapper>
        </ContentRightSideWrapper>
      </ProductContentWrapper>
    </ProductPageWrapper>
  ) : (
    <Text size={'extra-huge'} color={'darkRed'}>
      Loading product
    </Text>
  );
};
