import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as CartCreators } from '~/store/ducks/cart';

import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Images from '~/components/UI/Images';

import { formatToReal } from '~/services/number_format';
import DropdownAlert from 'react-native-dropdownalert';
import {
  Container,
  Vacuum,
  Lista,
  Wrapper,
  WrapperContent,
  WrapperIconText,
  WrapperIcon,
  WrapperText,
  ImageIcon,
  Title,
  Description,
  Price,
  RemoveButton,
  RemoveIcon,
  WrapperButtons,
  ButtonCart,
  ButtonIcon,
  Button,
  ButtonText,
} from './styles';

function Cart({ navigation }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const { orders, fullPrice } = cart;

  const price = formatToReal(fullPrice);
  return (
    <Container>
      <Header icon="chevron-left" title="Carrinho" price={price} navigation={navigation} />
      <DropdownAlert ref={ref => (dropDownAlertRef = ref)} />
      <Wrapper>
        {orders.length ? (
          <Lista
            data={orders}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <WrapperContent>
                <WrapperIconText>
                  <WrapperIcon>
                    <ImageIcon source={Images[`pizza${item.type.id}`]} />
                  </WrapperIcon>
                  <WrapperText>
                    <Title>{`${item.type.description} ${item.type.type}`}</Title>
                    <Description>{`Tamanho: ${item.size.description}`}</Description>
                    <Price>{item.priceWithMask}</Price>
                  </WrapperText>
                </WrapperIconText>
                <RemoveButton onPress={() => dispatch(CartCreators.removeOrder(item.id))}>
                  <RemoveIcon />
                </RemoveButton>
              </WrapperContent>
            )}
          />
        ) : (
          <Vacuum />
        )}
        <WrapperButtons>
          <ButtonCart onPress={() => navigation.navigate('Home')}>
            <ButtonIcon icon="cart-plus" size={20} color="#666666" />
          </ButtonCart>
          <Button
            onPress={() => {
              if (orders.length > 0) {
                return navigation.navigate('FinishOrder');
              }
              return dropDownAlertRef.alertWithType('error', 'Error', 'Carrinho vazio');
            }}
          >
            <ButtonText>Realizar Pedido</ButtonText>
            <ButtonIcon icon="angle-right" size={20} color="#fff" />
          </Button>
        </WrapperButtons>
      </Wrapper>
    </Container>
  );
}

Cart.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Cart;
