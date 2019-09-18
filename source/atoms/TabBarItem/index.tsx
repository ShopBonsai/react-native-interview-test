import React from 'react';

import { Container, Icon, Text } from './style';

export interface Props {
  active?: boolean;
  activeColor?: string;
  color?: string;
  iconName: string;
  iconSize?: number;
  onPress?: () => void;
  testID?: string;
  textSize?: number;
}

const TabBarItem: React.FC<Props> = ({
  active,
  activeColor,
  children,
  color,
  iconName,
  iconSize,
  onPress,
  testID,
  textSize,
}) => {
  return (
    <Container
      active={active}
      activeColor={activeColor}
      onPress={onPress}
      testID={testID}
    >
      <Icon
        color={active ? activeColor : color}
        size={iconSize}
        name={iconName}
      />
      <Text
        color={active ? activeColor : color}
        size={textSize}
        numberOfLines={1}
      >
        {children}
      </Text>
    </Container>
  );
};

TabBarItem.defaultProps = {
  active: false,
  activeColor: '#1685fb',
  color: '#f0f5ff',
  iconSize: 30,
  textSize: 16,
};

export default TabBarItem;
