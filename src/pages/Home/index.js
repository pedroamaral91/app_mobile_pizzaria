import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as ProdutosCreators } from '~/store/ducks/products';

import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  FoodTypes,
  Item,
  Image,
  Info,
  Title,
  Description,
  Duration,
  Timer,
  WrapperTimer,
} from './styles';
import Header from '~/components/Header';
import Images from '~/components/UI/Images';

function Home({ navigation }) {
  const { products, cart } = useSelector(state => ({
    products: state.products.data,
    cart: state.cart.orders,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    // AsyncStorage.clear();
    if (products.length === 0) {
      dispatch(ProdutosCreators.getProducts());
    }
  }, []);

  const totalItemsCart = cart.length;

  return (
    <Container>
      <Header
        icon="history"
        title="Pizzaria Don Juan"
        showButtomCart
        cartItems={totalItemsCart}
        navigation={navigation}
      />
      {products.length > 0 && (
        <FoodTypes
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Item
              onPress={() => {
                navigation.navigate('FoodTypes', { id: item.id });
              }}
            >
              <Image source={Images[item.icon]} />
              <Info>
                <Title>{item.product}</Title>
                <Description>{item.description}</Description>
                <WrapperTimer>
                  <Timer />
                  <Duration>{`${item.duration} min`}</Duration>
                </WrapperTimer>
              </Info>
            </Item>
          )}
        />
      )}
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
