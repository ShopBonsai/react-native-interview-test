import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CTAButton from '../../atoms/CTAButton';
import MovieDetails from '../../organisms/MovieDetails';
import BottomSheet from '../../organisms/BottomSheet';
import DetailsTicketPicker from '../DetailsTicketPicker';
import { ApplicationState } from '../../store/ducks';
import { clearSelection, DetailsState } from '../../store/ducks/details';
import { addTicket } from '../../store/ducks/cart';

const DetailsBottomSheet: React.FC = () => {
  // Get values from details store state
  const { movie, ticket } = useSelector<ApplicationState, DetailsState>(
    store => store.details,
  );

  // Get dispatcher
  const dispatch = useDispatch();

  // Dispatch action to clear selected movie on bottom sheet close
  const handleClose = (): void => {
    dispatch(clearSelection());
  };

  // Dispatch action to add the selected ticket to cart (and clear selection)
  const handleAddTicket = (): void => {
    dispatch(addTicket(ticket));
    handleClose();
  };

  // Render add to cart lead button
  const renderLeadButton = (): JSX.Element => {
    return (
      <CTAButton
        iconName="shopping-cart"
        disabled={!ticket}
        onPress={handleAddTicket}
        testID="add-to-cart-button"
      >
        Add To Cart
      </CTAButton>
    );
  };

  // Render bottom sheet content
  const renderContent = (): JSX.Element | null => {
    // Prevent render if there is no movie selected
    if (!movie) {
      return null;
    }

    return (
      <MovieDetails movie={movie} lead={renderLeadButton()}>
        <DetailsTicketPicker />
      </MovieDetails>
    );
  };

  return (
    <BottomSheet visible={!!movie} onClose={handleClose}>
      {renderContent()}
    </BottomSheet>
  );
};

export default DetailsBottomSheet;
