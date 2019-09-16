import React, { useMemo } from 'react';

import CTAPicker, { Option } from '../CTAPicker';

import { LabelContainer, Icon, Amount, Filler, Price } from './style';

export interface Props {
  color?: string;
  inventory: number;
  onChange?: (value: number) => void;
  price: number;
  size?: number;
  value?: number;
}

const TicketAmountPicker: React.FC<Props> = ({
  color,
  inventory,
  onChange,
  price,
  size,
  value,
}) => {
  // Render option label
  const renderLabel = (amount: number): JSX.Element => (
    <LabelContainer>
      <Icon color={color} size={size} name="ticket" />
      <Amount color={color} size={size}>
        x {amount}
      </Amount>
      <Filler color={color} />
      <Price color={color} size={size}>
        $ {(price * amount).toFixed(2)}
      </Price>
    </LabelContainer>
  );

  // Map inventory ticket amount to options
  const mapInventoryToOptions = (): Option[] => {
    return Array(inventory)
      .fill(null)
      .map((_null, index) => {
        const amount: number = index + 1;
        return {
          label: renderLabel(amount),
          value: amount,
        };
      });
  };

  // Cache options and only update upon inventory change
  const options = useMemo<Option[]>(mapInventoryToOptions, [inventory]);

  return (
    <CTAPicker
      options={options}
      placeholer="Select the amount of tickets"
      onChange={onChange}
      value={value}
    />
  );
};

TicketAmountPicker.defaultProps = {
  color: '#1685fb',
  size: 18,
};

export default TicketAmountPicker;
