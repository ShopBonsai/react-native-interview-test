import React from 'react';

import { Container } from './style';

const withSafeArea = <Props extends object>(
  Component: React.ComponentType<Props>,
) => {
  return (props: Props) => {
    return (
      <Container>
        <Component {...props} />
      </Container>
    );
  };
};

export default withSafeArea;
