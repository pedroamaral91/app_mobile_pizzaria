import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as OrdersCreators } from '~/store/ducks/orders';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container, Wrapper, OrderList, WrapperItem, Text,
} from './styles';
import Header from '~/components/Header';
import { formatToReal } from '~/services/number_format';

function MyOrders({ navigation }) {
  const orders = useSelector(state => state.orders.data.map(order => ({
      ...order,
      date: (formatRelative(parseISO(order.updatedAt), new Date(), { locale: pt })),
      fullPriceWithMask: formatToReal(order.full_price),
  })));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OrdersCreators.getRequest());
  }, []);
  return (
    <Container>
      <Header title="Meus pedidos" icon="chevron-left" navigation={navigation} />
      <Wrapper>
        {!!orders.length && (
          <OrderList
            data={orders}
            keyExtractor={order => String(order.id)}
            renderItem={({ item }) => (
              <WrapperItem>
                <Text size={12} color="#0b2031">
                  Pedido #
                  {item.id}
                </Text>
                <Text size={11} color="#706e7b">
                  {item.date}
                </Text>
                <Text size={16} color="#0b2031" bold>
                  {item.fullPriceWithMask}
                </Text>
              </WrapperItem>
            )}
          />
        )}
      </Wrapper>
    </Container>
  );
}

MyOrders.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MyOrders;
