import React from 'react';

import CTAText from '../../atoms/CTAText';
import FavoriteButton from '../../atoms/FavoriteButton';

import { Container, Image, Lead, Title, Extra } from './style';

export interface Props {
  image: string;
  isFavorite?: boolean;
  onFavorite?: (isFavorite: boolean) => void;
  onPress?: () => void;
  subtitle?: string;
  testID?: string;
  title: string;
}

const MovieCard: React.FC<Props> = ({
  image,
  isFavorite,
  onFavorite,
  onPress,
  subtitle,
  testID,
  title,
}) => {
  return (
    <Container onPress={onPress} testID={testID}>
      <Image source={{ uri: image }} resizeMode="cover" />
      <Lead>
        <Title numberOfLines={1}>{title}</Title>
        <CTAText>{subtitle}</CTAText>
      </Lead>
      <Extra>
        <FavoriteButton isFavorite={isFavorite} onPress={onFavorite} />
      </Extra>
    </Container>
  );
};

MovieCard.defaultProps = {
  subtitle: 'View Details',
};

export default MovieCard;
