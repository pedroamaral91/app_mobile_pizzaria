import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
`;

export const FoodTypes = styled.FlatList``;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #fff;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  margin: 10px 20px;
  border-radius: 6;
  elevation: 3;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const Info = styled.View`
  margin-left: 15px;
  width: 70%;
`;

export const Description = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
`;

export const Timer = styled(Icon).attrs({
  name: 'alarm',
  size: 15,
  color: '#8888',
})``;

export const WrapperTimer = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin-top: 5px;
`;

export const Duration = styled.Text`
  font-family: Helvetica;
  font-size: 10px;
  color: #706e7b;
  letter-spacing: 0.46px;
  text-align: left;
  margin-left: 5px;
`;
