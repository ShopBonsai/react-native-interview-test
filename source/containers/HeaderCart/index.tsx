import React, { useState, useMemo, Fragment } from 'react';
import { useSelector } from 'react-redux';

import Badge from '../../atoms/Badge';
import CartButton from '../../atoms/CartButton';
import BottomSheet from '../../organisms/BottomSheet';
import CartCheckout from '../CartCheckout';
import { ApplicationState } from '../../store/ducks';
import { CartState } from '../../store/ducks/cart';

const HeaderCart: React.FC = () => {
  // Flag to handle bottom sheet visibility
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState<boolean>(
    false,
  );

  // Get values from details store state
  const { tickets } = useSelector<ApplicationState, CartState>(
    store => store.cart,
  );

  // Cached amount of tickets
  const ticketAmount: number = useMemo<number>(() => {
    return tickets.reduce((acc, cur) => acc + cur.amount, 0);
  }, [tickets]);

  // Opens or closes bottomSheet according to current bottm sheet visibility state
  const toggleBottomSheet = (): void =>
    setIsBottomSheetVisible(!isBottomSheetVisible);

  return (
    <Fragment>
      <Badge count={ticketAmount}>
        <CartButton onPress={toggleBottomSheet} />
      </Badge>
      <BottomSheet visible={!!isBottomSheetVisible} onClose={toggleBottomSheet}>
        <CartCheckout />
      </BottomSheet>
    </Fragment>
  );
};

export default HeaderCart;
