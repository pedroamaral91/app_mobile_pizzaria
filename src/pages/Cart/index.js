import React from 'react';
import Header from '~/components/Header';

import {
  Container,
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

const data = [
  {
    id: Math.random(),
    tipo: 'Pizza Calabresa',
    tamanho: 'Tamanho: média',
    valor: 'R$ 42,00',
  },
  {
    id: Math.random(),
    tipo: 'Pizza Calabresa',
    tamanho: 'Tamanho: média',
    valor: 'R$ 42,00',
  },
  {
    id: Math.random(),
    tipo: 'Pizza Calabresa',
    tamanho: 'Tamanho: média',
    valor: 'R$ 42,00',
  },
];

const Cart = () => (
  <Container>
    <Header icon="chevron-left" title="Carrinho" price="R$ 0,00" />
    <Wrapper>
      <Lista
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <WrapperContent>
            <WrapperIconText>
              <WrapperIcon>
                <ImageIcon />
              </WrapperIcon>
              <WrapperText>
                <Title>{item.tipo}</Title>
                <Description>{item.tamanho}</Description>
                <Price>{item.valor}</Price>
              </WrapperText>
            </WrapperIconText>
            <RemoveButton>
              <RemoveIcon />
            </RemoveButton>
          </WrapperContent>
        )}
      />
      <WrapperButtons>
        <ButtonCart>
          <ButtonIcon icon="cart-plus" size={20} color="#666666" />
        </ButtonCart>
        <Button>
          <ButtonText>Realizar Pedido</ButtonText>
          <ButtonIcon icon="angle-right" size={20} color="#fff" />
        </Button>
      </WrapperButtons>
    </Wrapper>
  </Container>
);

export default Cart;
