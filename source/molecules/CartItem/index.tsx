import React from 'react';

import DeleteButton from '../../atoms/DeleteButton';
import TicketAmountPicker from '../../organisms/TicketAmountPicker';

import { Container, Content, PickerContainer, Title, Subtitle } from './style';

export interface Props {
  amount: number;
  inventory: number;
  onChange?: (value: number) => void;
  onDelete?: () => void;
  price: number;
  subtitle: string;
  title: string;
}

const CartItem: React.FC<Props> = ({
  amount,
  inventory,
  onChange,
  onDelete,
  price,
  subtitle,
  title,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Content>
        <PickerContainer>
          <TicketAmountPicker
            inventory={inventory}
            price={price}
            onChange={onChange}
            value={amount}
          />
        </PickerContainer>
        {onDelete && <DeleteButton onDelete={onDelete} />}
      </Content>
    </Container>
  );
};

CartItem.defaultProps = {
  amount: 1,
};

export default CartItem;
