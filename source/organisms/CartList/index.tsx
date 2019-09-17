import React from 'react';
import { ListRenderItem } from 'react-native';

import CartItem from '../../molecules/CartItem';
import Ticket from '../../models/ticket';

import { Container, FlatList, ItemContainer } from './style';

export interface Props {
  onChange: (ticket: Ticket, amount: number) => void;
  onRemoveFromCart: (ticket: Ticket) => void;
  tickets: Ticket[];
}

const CartList: React.FC<Props> = ({ onChange, onRemoveFromCart, tickets }) => {
  // Movie item renderer
  const renderItem: ListRenderItem<Ticket> = ({ index, item }) => {
    // Delegate cart item change callback to parent
    const handleChange = (amount: number): void => {
      onChange(item, amount);
    };

    // Delegate cart item delete callback to parent
    const handleDelete = (): void => {
      onRemoveFromCart(item);
    };

    // Checks if current item is last item of the list
    const isLastItem: boolean = index === tickets.length - 1;

    return (
      <ItemContainer last={isLastItem}>
        <CartItem
          amount={item.amount}
          inventory={item.movie.inventory}
          onChange={handleChange}
          onDelete={handleDelete}
          price={item.movie.price}
          subtitle={new Date(item.movie.date).toLocaleString()}
          title={item.movie.title}
        />
      </ItemContainer>
    );
  };

  return (
    <Container>
      <FlatList
        data={tickets}
        renderItem={renderItem as ListRenderItem<unknown>}
        keyExtractor={item => (item as Ticket).movie._id.$oid}
      />
    </Container>
  );
};

export default CartList;
