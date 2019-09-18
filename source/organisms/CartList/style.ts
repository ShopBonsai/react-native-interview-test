import styled from 'styled-components/native';
import { FlatList as RNFlatList } from 'react-native';

export const Container = styled.View``;

export const FlatList = styled(RNFlatList)`
  padding-top: 15px;
`;

interface ItemContainerProps {
  last?: boolean;
}

export const ItemContainer = styled.View<ItemContainerProps>`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom-color: #f0f5ff;
  border-bottom-width: ${props => (props.last ? 0 : 1)};
`;
