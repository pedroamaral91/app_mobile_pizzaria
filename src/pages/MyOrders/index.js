import React from 'react';

import {
  Container, Wrapper, OrderList, WrapperItem, Text,
} from './styles';
import Header from '~/components/Header';

const pedidos = [
  {
    id: Math.random(),
    num_pedido: '3',
    horario_pedido: '17',
    valor: 'R$ 42,00',
  },
  {
    id: Math.random(),
    num_pedido: '3',
    horario_pedido: '17',
    valor: 'R$ 42,00',
  },
  {
    id: Math.random(),
    num_pedido: '3',
    horario_pedido: '17',
    valor: 'R$ 42,00',
  },
];

const MyOrders = () => (
  <Container>
    <Header title="Meus pedidos" icon="chevron-left" />
    <Wrapper>
      <OrderList
        data={pedidos}
        keyExtractor={pedido => String(pedido.id)}
        renderItem={({ item }) => (
          <WrapperItem>
            <Text size={12} color="#0b2031">
              Pedido #
              {item.num_pedido}
            </Text>
            <Text size={11} color="#706e7b">
              Ontem às&nbsp;
              {item.horario_pedido}
h
            </Text>
            <Text size={16} color="#0b2031" bold>
              {item.valor}
            </Text>
          </WrapperItem>
        )}
      />
    </Wrapper>
  </Container>
);

export default MyOrders;
