import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Wrapper = styled.View`
  padding: 0 30px;
  margin: 0 20px;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
`;

export const InputText = styled.TextInput.attrs(props => ({
  placeholder: props.placeholder,
  textAlignVertical: 'top',
}))`
  background-color: #fff;
  padding: 15px;
  flex-basis: ${props => (props.flexBasis ? props.flexBasis : '100%')};
  margin: 0 0 15px;
  border-radius: 10px;
  elevation: 5;
`;

export const ButtonIcon = styled(Icon).attrs(props => ({
  name: props.icon,
  size: props.size,
  color: props.color,
}))``;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  margin-left: auto;
  justify-content: space-around;
  align-items: center;
  background-color: #e5293e;
  width: 180px;
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
