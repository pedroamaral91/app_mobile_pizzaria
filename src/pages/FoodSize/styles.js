import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const maxWidthContainer = (width - 70) / 2;

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  background-color: #fff;
  padding: 40px;
  flex: 1;
  max-width: ${maxWidthContainer};
  margin-bottom: 8px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  elevation: 6;
`;

export const Lista = styled.FlatList.attrs({
  numColumns: 2,
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    padding: 30,
  },
})``;

export const ImageWrapper = styled.View`
  min-width: 100px;
  min-height: 100px;
  align-items: center;
  margin-bottom: 5px;
`;

export const ImageIcon = styled.Image.attrs(props => ({
  source: props.image,
}))``;

export const Title = styled.Text`
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
`;

export const Preco = styled.Text`
  opacity: 0.6;
  font-weight: bold;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
`;
