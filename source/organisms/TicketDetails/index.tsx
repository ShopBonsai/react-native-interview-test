import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Ticket from '../../models/ticket';

import {
  Container,
  Content,
  Title,
  Details,
  Genre,
  Time,
  PriceContainer,
  PriceValue,
  PriceSuffix,
  QR,
  PurchaseInfo,
  Amount,
  Filler,
  Price,
} from './style';

const mockQR = require('../../../assets/images/qrcode.png');

export interface Props {
  lead?: JSX.Element;
  ticket: Ticket;
}

const TicketDetails: React.FC<Props> = ({
  children,
  ticket: {
    amount,
    movie: { date, genre, price, title },
  },
}) => {
  return (
    <Container>
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
        <PurchaseInfo>
          <Icon color="#2d3144" size={40} name="ticket" />
          <Amount>x {amount}</Amount>
          <Filler />
          <Price>$ {(price * amount).toFixed(2)}</Price>
        </PurchaseInfo>
        <QR source={mockQR} resizeMode="cover" />
      </Content>
      {children}
    </Container>
  );
};

export default TicketDetails;
