import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './style';

export interface Props {
  color?: string;
  isFavorite?: boolean;
  onPress?: (isFavorite: boolean) => void;
  size?: number;
}

const FavoriteButton: React.FC<Props> = ({
  color,
  isFavorite,
  onPress,
  size,
}) => {
  const iconName: string = isFavorite ? 'heart' : 'heart-o';

  const handlePress = (): void => {
    if (onPress) {
      onPress(!isFavorite);
    }
  };

  return (
    <Container onPress={handlePress}>
      <Icon color={color} size={size} name={iconName} />
    </Container>
  );
};

FavoriteButton.defaultProps = {
  color: '#ff5757',
  size: 35,
};

export default FavoriteButton;
