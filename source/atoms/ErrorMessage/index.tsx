import React from 'react';

import { Container, Icon, Message } from './style';

export interface Props {
  color?: string;
  size?: number;
}

const ErrorMessage: React.FC<Props> = ({ children, color, size }) => {
  return (
    <Container>
      <Icon color={color} size={size} name="alert-circle" />
      <Message color={color} size={size}>
        {children}
      </Message>
    </Container>
  );
};

ErrorMessage.defaultProps = {
  color: '#ff5757',
  size: 30,
};

export default ErrorMessage;
