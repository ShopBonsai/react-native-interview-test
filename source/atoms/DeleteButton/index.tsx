import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './style';

export interface Props {
  color?: string;
  isFavorite?: boolean;
  onDelete?: () => void;
  size?: number;
  testID?: string;
}

const DeleteButton: React.FC<Props> = ({ color, onDelete, size, testID }) => {
  const handlePress = (): void => {
    Alert.alert(
      'Delete Item',
      'Are you sure?',
      [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress: onDelete,
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <Container onPress={handlePress} testID={testID}>
      <Icon color={color} size={size} name="trash" />
    </Container>
  );
};

DeleteButton.defaultProps = {
  color: '#ff5757',
  size: 35,
};

export default DeleteButton;
