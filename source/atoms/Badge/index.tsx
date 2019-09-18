import React from 'react';

import { Container, CountContainer, Count } from './style';

export interface Props {
  color?: string;
  count?: number;
  countColor?: string;
  size?: number;
}

const Badge: React.FC<Props> = ({
  children,
  color,
  count,
  countColor,
  size,
}) => {
  const renderCount = (): JSX.Element | null => {
    if (!count || count <= 0) {
      return null;
    }

    return (
      <CountContainer color={color} size={size}>
        <Count color={countColor} size={size}>
          {count}
        </Count>
      </CountContainer>
    );
  };

  return (
    <Container>
      {children}
      {renderCount()}
    </Container>
  );
};

Badge.defaultProps = {
  color: '#ff5757',
  count: 0,
  countColor: '#fff',
  size: 14,
};

export default Badge;
