import React from 'react';

import { Container, Icon, Text } from './style';

export interface Props {
  color?: string;
  iconName?: string;
  size?: number;
  testID?: string;
}

const Placeholder: React.FC<Props> = ({
  children,
  color,
  iconName,
  size,
  testID,
}) => {
  return (
    <Container testID={testID}>
      {iconName && <Icon name={iconName} color={color} size={size} />}
      <Text color={color} size={size}>
        {children}
      </Text>
    </Container>
  );
};

Placeholder.defaultProps = {
  iconName: 'inbox',
  color: '#f0f5ff',
  size: 35,
};

export default Placeholder;
