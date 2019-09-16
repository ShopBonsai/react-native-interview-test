import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import configureStore, { MockStoreCreator, MockStore } from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ApplicationState } from '../../store/ducks';

import DetailsTicketPicker from '.';

describe('DetailsTicketPicker Container', () => {
  const initialState: Partial<ApplicationState> = {
    details: {
      movie: {
        date: '2017-09-27T05:06:56Z',
        genre: 'Drama|War',
        image: 'http://dummyimage.com/1459x751.png/cc0000/ffffff',
        inventory: 4,
        price: 28.704,
        title: 'Long Live Death (Viva la muerte)',
        _id: { $oid: '5b8701a1fc13ae6569000000' },
      },
    },
    tickets: {
      tickets: [],
    },
  };
  const mockStore: MockStoreCreator = configureStore();
  let store: MockStore;
  let tree: ReactTestRenderer;

  beforeAll(() => {
    store = mockStore(initialState);
    tree = renderer.create(
      <Provider store={store}>
        <DetailsTicketPicker />
      </Provider>,
    );
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
