import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.TouchableOpacity``;

export const Image = styled.Image`
  width: 100%;
  height: ${Dimensions.get('window').height / 3.5};
  border-radius: 5;
  border-width: 2;
  border-color: rgba(39, 43, 61, 0.5);
`;

export const Lead = styled.View`
  background-color: rgba(39, 43, 61, 0.5);
  padding: 5px 10px;
  position: absolute;
  bottom: 2;
  left: 2;
  right: 2;
`;

export const Title = styled.Text`
  color: #f0f5ff;
  font-size: 16;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const Extra = styled.View`
  position: absolute;
  top: 5px;
  right: 10px;
`;
