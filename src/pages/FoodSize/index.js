import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as PriceCreators } from '~/store/ducks/prices';

import Header from '~/components/Header';
import Images from '~/components/UI/Images';

import PropTypes from 'prop-types';

import {
  Container, Lista, Wrapper, ImageIcon, Title, Preco, ImageWrapper,
} from './styles';

function FoodSize({ navigation }) {
  const { prices } = useSelector(state => state.prices);
  const dispatch = useDispatch();

  const { params } = navigation.state;

  useEffect(() => {
    dispatch(PriceCreators.getPrices(params.typeId));
  }, []);

  return (
    <Container>
      <Header title="Selecione um tamanho" icon="chevron-left" navigation={navigation} />
      {!!prices.length && (
        <Lista
          data={prices}
          keyExtractor={price => String(price.id)}
          renderItem={({ item }) => (
            <Wrapper>
              <ImageWrapper>
                <ImageIcon image={Images[`tamanho${item.size.id}`]} />
              </ImageWrapper>
              <Title>{item.size.description}</Title>
              <Preco>{item.price}</Preco>
            </Wrapper>
          )}
        />
      )}
    </Container>
  );
}

FoodSize.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default FoodSize;
