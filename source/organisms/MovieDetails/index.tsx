import React from 'react';

import Movie from '../../models/movie';

import {
  Container,
  Image,
  Content,
  Title,
  Details,
  Genre,
  Time,
  PriceContainer,
  PriceValue,
  PriceSuffix,
  Lead,
} from './style';

export interface Props {
  lead?: JSX.Element;
  movie: Movie;
}

const MovieDetails: React.FC<Props> = ({
  children,
  lead,
  movie: { date, genre, image, price, title },
}) => {
  return (
    <Container testID="movie-details">
      <Image source={{ uri: image }} resizeMode="cover" />
      <Content>
        <Title>{title}</Title>
        <Details>
          <Genre>{genre}</Genre>
          <Time>{new Date(date).toLocaleString()}</Time>
        </Details>
        <PriceContainer>
          <PriceValue>{`$ ${price.toFixed(2)}`}</PriceValue>
          <PriceSuffix> / unit</PriceSuffix>
        </PriceContainer>
        {children}
      </Content>
      <Lead>{lead}</Lead>
    </Container>
  );
};

export default MovieDetails;
