import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${Dimensions.get('window').height / 3.5};
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18;
  margin-bottom: 10;
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10;
`;

export const Genre = styled.Text`
  font-size: 14;
`;

export const Time = styled.Text`
  font-size: 14;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10;
`;

export const PriceValue = styled.Text`
  font-weight: bold;
  font-size: 16;
`;

export const PriceSuffix = styled.Text`
  font-size: 14;
`;

export const Lead = styled.View``;
