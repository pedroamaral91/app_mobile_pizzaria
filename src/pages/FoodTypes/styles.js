import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const maxWidthContainer = (width - 70) / 2;

export const Container = styled.View`
  flex: 1;
`;

export const Lista = styled.FlatList.attrs({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  numColumns: 2,
  contentContainerStyle: {
    padding: 30,
  },
})``;

export const ButtonItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #fff;
  flex: 1;
  align-items: center;
  margin: 5px;
  max-width: ${maxWidthContainer};
  padding: 40px 0;
  border-radius: 10px;
  elevation: 6;
`;

export const Imagem = styled.Image.attrs(props => ({
  source: props.image,
}))`
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
`;
