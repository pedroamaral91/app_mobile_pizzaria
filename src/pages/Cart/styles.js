import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Pizza from '~/assets/Tipos/pizza.png';

export const Container = styled.View`
  flex: 1;
`;

export const Lista = styled.FlatList``;

export const Wrapper = styled.View`
  padding: 0 30px;
`;

export const WrapperContent = styled.View`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  border-radius: 10px;
  margin: 3px 3px 15px;
  elevation: 5;
`;

export const WrapperIconText = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperIcon = styled.View`
  width: 78px;
  height: 78px;
`;

export const WrapperText = styled.View`
  align-self: center;
  margin-left: 15px;
`;

export const ImageIcon = styled.Image.attrs({
  source: Pizza,
})``;

export const Title = styled.Text`
  font-family: 'Helvetica';
  font-size: 12px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const Description = styled.Text`
  font-family: 'Helvetica';
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
`;

export const Price = styled.Text`
  font-family: 'Helvetica-Bold';
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  font-weight: bold;
`;

export const RemoveButton = styled.TouchableOpacity`
  align-self: center;
`;

export const RemoveIcon = styled(Icon).attrs({
  name: 'trash',
  size: 15,
  color: '#ff6363',
})``;

export const WrapperButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;
export const ButtonCart = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: #d3d3d3;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
export const ButtonIcon = styled(Icon).attrs(props => ({
  name: props.icon,
  size: props.size,
  color: props.color,
}))``;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: #e5293e;
  flex-direction: row;
  width: 200px;
  align-items: center;
  justify-content: space-around;
  height: 35px;
  border-radius: 30px;
`;

export const ButtonText = styled.Text`
  font-family: 'Helvetica-Bold';
  text-transform: uppercase;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
`;
