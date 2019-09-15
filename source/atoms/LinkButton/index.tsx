import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { Container, Text } from './style';

export interface Props {
  onPress?: (e: GestureResponderEvent) => void;
}

const LinkButton: React.FC<Props> = ({ children, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
};

export default LinkButton;
