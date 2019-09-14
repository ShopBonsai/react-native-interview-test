import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Text } from './style';

export interface Props {
  color?: string;
  size?: number;
}

const CTAText: React.FC<Props> = ({ children, color, size }) => {
  return (
    <Container>
      <Text color={color} size={size} numberOfLines={1}>
        {children}
      </Text>
      <Icon color={color} size={size} name="angle-right" />
    </Container>
  );
};

CTAText.defaultProps = {
  color: '#1685fb',
  size: 16,
};

export default CTAText;
