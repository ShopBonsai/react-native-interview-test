import React from 'react';

import appPaths, { Path } from '../../routes/paths';

import { Container, Title } from './style';

export interface Props {
  navigation: any;
  paths: Path[];
}

const Header: React.FC<Props> = ({ navigation }) => {
  const activeRouteContainerIndex: number = navigation.state.index;
  const activeRouteContainer: any =
    navigation.state.routes[activeRouteContainerIndex];
  const activeRouteIndex: number = activeRouteContainer.index;
  const activeRouteName: string =
    activeRouteContainer.routes[activeRouteIndex].routeName;

  return (
    <Container>
      <Title>{activeRouteName}</Title>
    </Container>
  );
};

Header.defaultProps = {
  paths: appPaths,
};

export default Header;
