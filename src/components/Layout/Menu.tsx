import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {route} from '../../constants/route';
import {AppStateType} from '../../store';
import {categoriesSelector} from '../../store/state/categories/selectors';
import {getCategoriesThunk} from '../../store/thunks/categoriesThunk';
import {Text} from '../../ui-kit/Typography/Text';
import {MenuButton, MenuWrapper} from './styles';

type MenuProps = {
  categories: string[];
  getCategories: () => void;
};

const Menu: React.FC<MenuProps> = ({categories, getCategories}) => {
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const getProductsByCategory = (category: string) => {
    navigate(`${route.home}category/${category}`);
  };
  return (
    <MenuWrapper>
      {categories &&
        categories.map((category, idx) => (
          <MenuButton
            key={idx}
            onClick={() => {
              getProductsByCategory(category);
            }}>
            <Text>{category}</Text>
          </MenuButton>
        ))}
    </MenuWrapper>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  categories: categoriesSelector(state),
});

const mapDispatchToProps = {
  getCategories: getCategoriesThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
