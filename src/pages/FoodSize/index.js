import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as PriceCreators } from '~/store/ducks/prices';
import { Creators as CartCreators } from '~/store/ducks/cart';

import Header from '~/components/Header';
import Images from '~/components/UI/Images';

import { formatToReal } from '~/services/number_format';
import PropTypes from 'prop-types';

import {
  Container, Lista, ItemButton, ImageIcon, Title, Preco, ImageWrapper,
} from './styles';

function FoodSize({ navigation }) {
  const prices = useSelector(state => state.prices.data.map((price) => {
    const priceWithMask = formatToReal(price.price);
    return { ...price, priceWithMask };
  }));
  const dispatch = useDispatch();

  const { params } = navigation.state;

  useEffect(() => {
    dispatch(PriceCreators.getPrices(params.typeId));
  }, []);

  function handleClick(item) {
    dispatch(CartCreators.addOrder(item));
    navigation.navigate('Cart');
  }

  return (
    <Container>
      <Header title="Selecione um tamanho" icon="chevron-left" navigation={navigation} />
      {!!prices.length && (
        <Lista
          data={prices}
          keyExtractor={price => String(price.id)}
          renderItem={({ item }) => (
            <ItemButton onPress={() => handleClick(item)}>
              <ImageWrapper>
                <ImageIcon image={Images[`tamanho${item.size.id}`]} />
              </ImageWrapper>
              <Title>{item.size.description}</Title>
              <Preco>{item.priceWithMask}</Preco>
            </ItemButton>
          )}
        />
      )}
    </Container>
  );
}

// FoodSize.propTypes = {
//   navigation: PropTypes.objectOf(PropTypes.object).isRequired,
// };

export default FoodSize;
