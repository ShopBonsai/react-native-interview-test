import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 10px;
  padding-top: 40px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18;
  margin-bottom: 10;
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
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

export const QR = styled.Image`
  width: ${Dimensions.get('window').width * 0.8};
  height: ${Dimensions.get('window').width * 0.8};
  margin: 0 auto;
`;

export const PurchaseInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  padding: 5px 0;
`;

export const Amount = styled.Text`
  color: #2d3144;
  font-size: 16;
`;

// TODO: Fix double border width. Currently border-bottom-width
// is not yet supported when border-style is setted to dotted
export const Filler = styled.View`
  flex: 1;
  align-self: flex-end;
  border-style: dotted;
  border-width: 1px;
  border-radius: 1;
  border-color: #2d3144;
`;

interface PriceProps {
  color?: string;
  size?: number;
}

export const Price = styled.Text<PriceProps>`
  color: #2d3144;
  font-size: 20;
  font-weight: bold;
`;
