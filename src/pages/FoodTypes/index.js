import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as ProductTypesCreators } from '~/store/ducks/productTypes';
import Images from '~/components/UI/Images';

import Header from '~/components/Header';

import {
  Container, Lista, ButtonItem, Imagem, Title,
} from './styles';

function FoodTypes({ navigation }) {
  const { types } = useSelector(state => state.productTypes);
  const dispatch = useDispatch();

  const { params } = navigation.state;

  useEffect(() => {
    if (!types.length) {
      dispatch(ProductTypesCreators.getTypes(params.id));
    }
  }, []);

  return (
    <Container>
      <Header icon="chevron-left" title="Selecione um tipo" navigation={navigation} />
      {!!types.length && (
        <Lista
          data={types}
          keyExtractor={type => String(type.id)}
          renderItem={({ item }) => (
            <ButtonItem onPress={() => navigation.navigate('FoodSize', { typeId: item.id })}>
              <Imagem image={Images[`pizza${item.id}`]} />
              <Title>{item.type}</Title>
            </ButtonItem>
          )}
        />
      )}
    </Container>
  );
}

FoodTypes.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default FoodTypes;
