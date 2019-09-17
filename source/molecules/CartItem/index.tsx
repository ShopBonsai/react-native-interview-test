import React from 'react';

import TicketAmountPicker from '../../organisms/TicketAmountPicker';

import { Container, Title, Subtitle } from './style';

export interface Props {
  amount: number;
  inventory: number;
  onChange?: (value: number) => void;
  price: number;
  subtitle: string;
  title: string;
}

const CartItem: React.FC<Props> = ({
  amount,
  inventory,
  onChange,
  price,
  subtitle,
  title,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <TicketAmountPicker
        inventory={inventory}
        price={price}
        onChange={onChange}
        value={amount}
      />
    </Container>
  );
};

CartItem.defaultProps = {
  amount: 1,
};

export default CartItem;
