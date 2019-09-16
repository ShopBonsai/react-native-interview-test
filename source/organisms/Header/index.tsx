import React from 'react';

import { Container, Title, Lead } from './style';

export interface Props {
  navigation?: any;
}

const Header: React.FC<Props> = ({ children, navigation }) => {
  const activeRouteContainerIndex: number = navigation.state.index;
  const activeRouteContainer: any =
    navigation.state.routes[activeRouteContainerIndex];
  const activeRouteIndex: number = activeRouteContainer.index;
  const activeRouteName: string =
    activeRouteContainer.routes[activeRouteIndex].routeName;

  return (
    <Container>
      <Title>{activeRouteName}</Title>
      <Lead>{children}</Lead>
    </Container>
  );
};

export default Header;
