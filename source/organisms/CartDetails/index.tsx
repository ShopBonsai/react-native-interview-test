import React, { useMemo } from 'react';

import CartList from '../CartList';
import CTAButton from '../../atoms/CTAButton';
import Placeholder from '../../atoms/Placeholder';
import Ticket from '../../models/ticket';

import {
  Container,
  Content,
  Extra,
  TotalContainer,
  TotalLabel,
  TotalFiller,
  TotalAmount,
} from './style';

export interface Props {
  color?: string;
  onChange: (ticket: Ticket, amount: number) => void;
  onCheckout: () => void;
  onRemoveFromCart: (ticket: Ticket) => void;
  size?: number;
  tickets: Ticket[];
}

const CartDetails: React.FC<Props> = ({
  color,
  onChange,
  onCheckout,
  onRemoveFromCart,
  size,
  tickets,
}) => {
  // Calculate the total sum and cache value
  const total = useMemo<number>(() => {
    return tickets.reduce((acc, cur) => {
      return acc + cur.movie.price * cur.amount;
    }, 0);
  }, [tickets]);

  // If there is no ticket in the cart, render placeholder
  if (tickets.length <= 0) {
    return (
      <Placeholder color="#2d3144" testID="cart-details-placeholder">
        Your cart is empty
      </Placeholder>
    );
  }

  return (
    <Container testID="cart-details">
      <Content>
        <CartList
          tickets={tickets}
          onChange={onChange}
          onRemoveFromCart={onRemoveFromCart}
        />
      </Content>
      <Extra>
        <TotalContainer>
          <TotalLabel color={color} size={size}>
            Total
          </TotalLabel>
          <TotalFiller color={color} />
          <TotalAmount color={color} size={size}>
            $ {total.toFixed(2)}
          </TotalAmount>
        </TotalContainer>
      </Extra>
      <CTAButton iconName="ticket" disabled={total <= 0} onPress={onCheckout}>
        Buy Tickets
      </CTAButton>
    </Container>
  );
};

CartDetails.defaultProps = {
  color: '#2d3144',
  size: 18,
};

export default CartDetails;
