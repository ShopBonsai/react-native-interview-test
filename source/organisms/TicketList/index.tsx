import React from 'react';
import { ListRenderItem } from 'react-native';

import TicketItem from '../../molecules/TicketItem';
import Ticket from '../../models/ticket';

import { Container, FlatList, ItemContainer } from './style';

export interface Props {
  onSelectTicket?: (ticket: Ticket) => void;
  tickets: Ticket[];
}

const TicketList: React.FC<Props> = ({ onSelectTicket, tickets }) => {
  // Ticket item renderer
  const renderItem: ListRenderItem<Ticket> = ({ index, item }) => {
    // Delegate ticket select callback to parent
    const handlePress = (): void => {
      if (onSelectTicket) {
        onSelectTicket(item);
      }
    };

    // Checks if current item is last item of the list
    const isLastItem: boolean = index === tickets.length - 1;

    return (
      <ItemContainer last={isLastItem}>
        <TicketItem
          amount={item.amount}
          onPress={handlePress}
          subtitle={new Date(item.movie.date).toLocaleString()}
          testID={`ticket-item-${index}`}
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

export default TicketList;
