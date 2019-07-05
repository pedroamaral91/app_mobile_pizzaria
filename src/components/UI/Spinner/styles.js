import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled(Icon).attrs({
  name: 'spinner',
  size: 24,
})``;
