import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';

import {
  Container,
  ValueText,
  Icon,
  OptionContainer,
  OptionText,
  ModalContent,
} from './style';

export type Option = { label: string | JSX.Element; value: any };

export interface Props {
  color?: string;
  iconName?: string;
  onChange?: (value: any) => void;
  options: Option[];
  placeholer?: string;
  size?: number;
  value?: any;
}

const CTAPicker: React.FC<Props> = ({
  color,
  iconName,
  onChange,
  options,
  placeholer,
  size,
  value,
}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // Opens or closes modal according to current modal visibility state
  const toggleModal = (): void => setIsModalVisible(!isModalVisible);

  // Renders the picker options
  const renderOptions = (): JSX.Element[] | null => {
    // Map options array prop to jsx array
    return options.map((option, index) => {
      // Delegate option select
      const handleOptionSelect = (): void => {
        if (onChange) {
          onChange(option.value);
        }

        toggleModal();
      };

      const optionContent: JSX.Element =
        // Verifies if the provided option label is a string or a jsx element
        // and wraps it inside an OptionText in case it is a string
        typeof option.label === 'string' ? (
          <OptionText color={color} size={size}>
            {option.label}
          </OptionText>
        ) : (
          option.label
        );

      // verifies if this is the last option to style accordingly
      const isLastOption: boolean = index === options.length - 1;

      return (
        <OptionContainer
          key={option.value}
          onPress={handleOptionSelect}
          last={isLastOption}
        >
          {optionContent}
        </OptionContainer>
      );
    });
  };

  // Render selected value jsx
  const renderValue = (): JSX.Element => {
    // Find selected option according to provided value
    const selectedOption: Option | undefined = options.find(
      option => option.value === value,
    );

    // Render text content in case label is a string or there was no value match
    if (!selectedOption || typeof selectedOption.label === 'string') {
      const label: string | JSX.Element | undefined = selectedOption
        ? selectedOption.label
        : placeholer;

      return (
        <ValueText color={color} size={size} numberOfLines={1}>
          {label}
        </ValueText>
      );
    }

    // Render option label otherwise
    return selectedOption.label;
  };

  return (
    <Container onPress={toggleModal}>
      {renderValue()}
      {!!iconName && <Icon color={color} size={size} name={iconName} />}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <SafeAreaView>
          <ModalContent>{renderOptions()}</ModalContent>
        </SafeAreaView>
      </Modal>
    </Container>
  );
};

CTAPicker.defaultProps = {
  color: '#1685fb',
  iconName: 'angle-down',
  options: [],
  placeholer: 'Select an option ...',
  size: 18,
};

export default CTAPicker;
