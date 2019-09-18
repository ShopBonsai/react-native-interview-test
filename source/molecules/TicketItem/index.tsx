import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import CTAText from '../../atoms/CTAText';

import {
  Container,
  Content,
  Details,
  Title,
  Subtitle,
  Lead,
  LeadLabel,
} from './style';

export interface Props {
  amount: number;
  leadText?: string;
  onPress?: () => void;
  subtitle: string;
  testID?: string;
  title: string;
}

const TicketItem: React.FC<Props> = ({
  amount,
  leadText,
  onPress,
  subtitle,
  testID,
  title,
}) => {
  return (
    <Container onPress={onPress} testID={testID}>
      <Title>{title}</Title>
      <Content>
        <Details>
          <Subtitle>{subtitle}</Subtitle>
          <CTAText>{leadText}</CTAText>
        </Details>
        <Lead>
          <Icon color="#f0f5ff" size={40} name="ticket" />
          <LeadLabel>x {amount}</LeadLabel>
        </Lead>
      </Content>
    </Container>
  );
};

TicketItem.defaultProps = {
  amount: 1,
  leadText: 'View Tickets',
};

export default TicketItem;
