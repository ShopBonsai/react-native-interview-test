import React from 'react';

import { Container, Icon, Text } from './style';

export interface Props {
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  disabledBackgroundColor?: string;
  disabledColor?: string;
  iconName?: string;
  onPress?: () => void;
  testID?: string;
  textSize?: number;
}

const CTAButton: React.FC<Props> = ({
  backgroundColor,
  children,
  color,
  disabled,
  disabledBackgroundColor,
  disabledColor,
  iconName,
  onPress,
  testID,
  textSize,
}) => {
  // Handle button press. Only delegates when button is enabled
  // and there is something to delegate
  const handlePress = (): void => {
    if (disabled || !onPress) {
      return;
    }

    onPress();
  };

  // Renders an icon provided there is an iconName
  const renderIcon = (): JSX.Element | null => {
    if (!iconName) {
      return null;
    }

    return (
      <Icon
        color={disabled ? disabledColor : color}
        size={textSize}
        name={iconName}
      />
    );
  };

  return (
    <Container
      activeOpacity={disabled ? 1 : 0.2}
      color={disabled ? disabledBackgroundColor : backgroundColor}
      onPress={handlePress}
      testID={testID}
    >
      {renderIcon()}
      <Text
        color={disabled ? disabledColor : color}
        size={textSize}
        numberOfLines={1}
      >
        {children}
      </Text>
    </Container>
  );
};

CTAButton.defaultProps = {
  backgroundColor: '#1685fb',
  disabled: false,
  disabledBackgroundColor: '#f5f5f5',
  disabledColor: '#b7b7b7',
  color: '#fff',
  textSize: 20,
};

export default CTAButton;
