import React from 'react';

import TabBarItem from '../../atoms/TabBarItem';
import appPaths, { Path } from '../../routes/paths';

import { Container } from './style';

export interface Props {
  navigation: any;
  paths: Path[];
}

const TabBar: React.FC<Props> = ({ navigation, paths }) => {
  const activeRouteIndex: number = navigation.state.index;
  const activeRouteName: string =
    navigation.state.routes[activeRouteIndex].routeName;

  const handlePress = (path: Path): void => {
    navigation.navigate(path.name);
  };

  const items: JSX.Element[] = paths.map(path => (
    <TabBarItem
      key={path.name}
      iconName={path.iconName}
      active={activeRouteName === path.name}
      onPress={() => handlePress(path)}
    >
      {path.name}
    </TabBarItem>
  ));

  return <Container>{items}</Container>;
};

TabBar.defaultProps = {
  paths: appPaths,
};

export default TabBar;
