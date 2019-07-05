import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Wrapper = styled.View`
  width: 80%;
  margin: 0 auto;
`;

export const OrderList = styled.FlatList``;

export const WrapperItem = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  margin: 0 5px 15px;
  elevation: 5;
`;

export const Text = styled.Text`
  font-family: Helvetica;
  font-size: ${props => props.size}px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 20px;
  text-align: left;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;
