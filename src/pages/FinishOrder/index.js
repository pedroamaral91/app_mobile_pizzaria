import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as CartCreators } from '~/store/ducks/cart';

import Header from '~/components/Header';

import {
  Container, Wrapper, InputText, ButtonIcon, Button, ButtonText,
} from './styles';
import { formatToReal } from '~/services/number_format';
import api from '~/services/api';
import DropdownAlert from 'react-native-dropdownalert';

function FinishOrder({ navigation }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    cep: '',
    number_house: '',
    street: '',
    neighborhood: '',
    notes: '',
  });

  const { fullPrice: full_price } = cart;
  const price = formatToReal(full_price);

  async function handleSubmit() {
    const { orders: order } = cart;
    try {
      const data = { ...form, order, full_price };
      const response = await api.post('app/store/order', data);
      if (response.status === 200) {
        dispatch(CartCreators.clearOrder());
        navigation.navigate('MyOrders');
      }
    } catch (er) {
      console.tron.log(er);
    }
  }
  async function handleCep(cep) {
    try {
      const response = await api.get(`app/searchcep/${cep}`);
      if (response.data) {
        setForm({
          ...form,
          cep,
          street: response.data.street,
          neighborhood: response.data.neighborhood,
        });
      }
    } catch (err) {
      dropDownAlertRef.alertWithType('error', 'Error', 'CEP não encontrado.');
    }
  }

  return (
    <Container>
      <Header icon="chevron-left" title="Realizar pedido" price={price} navigation={navigation} />
      <DropdownAlert ref={ref => (dropDownAlertRef = ref)} />
      <Wrapper>
        <InputText
          value={form.notes}
          onChange={item => setForm({ ...form, notes: item.text })}
          placeholder="Alguma observação?"
          multiline
          numberOfLines={6}
        />
        <InputText
          placeholder="Qual seu CEP?"
          value={form.cep}
          onChangeText={(text) => {
            setForm({ ...form, cep: text });
            if (text.length === 8) {
              handleCep(text);
            }
          }}
        />
        <InputText
          value={form.street}
          onChangeText={text => setForm({ ...form, street: text })}
          placeholder="Rua"
          flexBasis="75%"
        />
        <InputText
          value={form.number_house}
          onChangeText={text => setForm({ ...form, number_house: text })}
          placeholder="Nº"
          flexBasis="20%"
        />
        <InputText
          value={form.neighborhood}
          onChangeText={text => setForm({ ...form, neighborhood: text })}
          placeholder="Bairro"
        />
        <Button onPress={handleSubmit}>
          <ButtonText>Finalizar</ButtonText>
          <ButtonIcon icon="angle-right" size={20} color="#fff" />
        </Button>
      </Wrapper>
    </Container>
  );
}

export default FinishOrder;
