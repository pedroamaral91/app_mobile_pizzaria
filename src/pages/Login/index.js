import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { Formik } from 'formik';
import * as Yup from 'yup';

import PropTypes from 'prop-types';
import api from '~/services/api';

import Spinner from '~/components/UI/Spinner';
import { Container, InputText, Logo, Buttom, TextButtom, Wrapper, TextError } from './styles';

function Login({ navigation }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function checkUserLoggedIn() {
    const token = await AsyncStorage.getItem('@App:auth_token');
    if (token) {
      navigation.navigate('Logged');
    }
  }

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um email válido.').required('Campo requerido.'),
    password: Yup.string().required('Campo requerido.'),
  });

  async function handleSubmitForm(params) {
    setLoading(true);
    try {
      const response = await api.post('/login', params);
      const { user, token } = response.data;
      await AsyncStorage.setItem('@App:email', user.email);
      await AsyncStorage.setItem('@App:name', user.name);
      await AsyncStorage.setItem('@App:auth_token', token);
      navigation.navigate('Logged');
      
    } catch (er) {
      const { data } = er.response;
      setErrorMessage(data.error);
      setLoading(false);
    } 
  }

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Formik
          onSubmit={handleSubmitForm}
          validationSchema={schema}
          initialValues={{ email: '', password: '' }}
        >
          {({ handleChange, handleSubmit, email, password, errors, touched }) => (
            <>
              <InputText
                value={email}
                onChangeText={handleChange('email')}
                placeholder="Seu email"
              />
              {errors.email && touched.email ? <TextError>{errors.email}</TextError> : null}
              <InputText
                placeholder="Senha secreta"
                value={password}
                secureTextEntry
                onChangeText={handleChange('password')}
              />
              {errors.password && touched.password ? (
                <TextError>{errors.password}</TextError>
              ) : null}
              <Buttom onPress={handleSubmit}>
                {loading ? <Spinner /> : <TextButtom>Entrar</TextButtom>}
              </Buttom>
              {errorMessage ? <TextError center>{errorMessage}</TextError> : null}
            </>
          )}
        </Formik>
        <Buttom noBackGroundColor>
          <TextButtom onPress={() => navigation.navigate('Signup')}>
            Criar conta gratuita
          </TextButtom>
        </Buttom>
      </Wrapper>
    </Container>
  );
}
Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Login;
