import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as ProdutosCreators } from '~/store/ducks/products';

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
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(ProdutosCreators.getProducts());
    }
  }, []);

  return (
    <Container>
      <Header icon="history" title="Pizzaria Don Juan" showButtomCart navigation={navigation} />
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
