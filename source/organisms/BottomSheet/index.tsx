import React, { useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container, CloseIconContainer } from './style';

export interface Props {
  visible: boolean;
  onClose?: () => void;
}

const BOTTOM_SHEET_HEIGHT: number = Dimensions.get('window').height * 0.85;

const BottomSheet: React.FC<Props> = ({ children, onClose, visible }) => {
  // Ref to bottom sheet component in order to access methods
  const ref = useRef<RBSheet>(null);

  // Flag to prevent double onClose callback call
  const state = useRef<'open' | 'closed'>(visible ? 'open' : 'closed');

  // Handle bottom sheet open state
  useEffect(() => {
    // open if should be visible and is not open
    if (!!ref.current && visible && state.current !== 'open') {
      ref.current.open();
      state.current = 'open';
    }
  }, [visible]);

  // Handle bottom sheet close state
  useEffect(() => {
    // close if should not be visible and is not closed
    if (!!ref.current && !visible && state.current !== 'closed') {
      ref.current.close();
      state.current = 'closed';
    }
  }, [visible]);

  // Close bottom sheet when close button is pressed
  const handleCloseButtonPress = (): void => {
    if (ref.current) {
      ref.current.close();
      state.current = 'closed';
    }
  };

  // Close button
  const closeButton: JSX.Element = (
    <CloseIconContainer onPress={handleCloseButtonPress}>
      <Icon name="close" size={30} />
    </CloseIconContainer>
  );

  // Handle bottom sheet close
  const handleClose = (): void => {
    state.current = 'closed';
    if (onClose) {
      onClose();
    }
  };

  return (
    <RBSheet
      ref={ref}
      height={BOTTOM_SHEET_HEIGHT}
      onClose={handleClose}
      closeOnDragDown
    >
      <Container>
        {children}
        {onClose && closeButton}
      </Container>
    </RBSheet>
  );
};

export default BottomSheet;
