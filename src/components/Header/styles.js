import styled from 'styled-components/native';
import HeaderBackground from '~/assets/header-background.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export const StatusBarColor = styled.StatusBar.attrs({
  backgroundColor: '#0b2031',
})``;

export const Container = styled.View`
  padding-top: 20px;
  flex-direction: row;
  justify-content: ${props => (props.showButtomCart || !!props.price ? 'space-between' : 'flex-start')};
  align-items: baseline;
  height: 80px;
`;

export const IconHeader = styled(Icon).attrs(props => ({
  name: props.icon,
  size: 20,
  color: '#fff',
}))``;

export const ImageHeader = styled.Image.attrs({
  source: HeaderBackground,
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Helvetica-Bold';
  align-self: center;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
  z-index: 1;
`;

export const ButtomHeader = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin: 0 20px;
  width: 50px;
  height: 50px;
  z-index: 1;
`;

export const ButtomCart = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #e5293e;
  width: 50px;
  height: 50px;
  border-radius: 25;
  margin: 0 20px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const CountItems = styled.Text`
  font-size: 12px;
  color: white;
`;

export const IconBadge = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  height: 20px;
  width: 20px;
  border-radius: 10;
  background-color: #ffc107;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0;
  text-align: right;
  margin: 0 20px;
  align-self: center;
`;
