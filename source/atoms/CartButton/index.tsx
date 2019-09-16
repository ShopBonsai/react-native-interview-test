import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './style';

export interface Props {
  color?: string;
  isFavorite?: boolean;
  onPress?: (isFavorite: boolean) => void;
  size?: number;
}

const CartButton: React.FC<Props> = ({ color, isFavorite, onPress, size }) => {
  const handlePress = (): void => {
    if (onPress) {
      onPress(!isFavorite);
    }
  };

  return (
    <Container onPress={handlePress}>
      <Icon color={color} size={size} name="shopping-cart" />
    </Container>
  );
};

CartButton.defaultProps = {
  color: '#ffde59',
  size: 35,
};

export default CartButton;
