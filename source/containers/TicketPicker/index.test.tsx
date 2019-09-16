import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import configureStore, { MockStoreCreator, MockStore } from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ApplicationState } from '../../store/ducks';

import TicketPicker, { Props } from '.';

describe('TicketPicker Container', () => {
  const initialState: ApplicationState = {
    feed: {
      loading: false,
      movies: [],
      page: 1,
      pageSize: 5,
      errorMessage: '',
    },
    favorites: {
      favorites: [],
    },
    details: {
      movie: undefined,
    },
    tickets: {
      tickets: [],
    },
  };
  const props: Props = {
    movie: {
      date: '2017-09-27T05:06:56Z',
      genre: 'Drama|War',
      image: 'http://dummyimage.com/1459x751.png/cc0000/ffffff',
      inventory: 4,
      price: 28.704,
      title: 'Long Live Death (Viva la muerte)',
      _id: { $oid: '5b8701a1fc13ae6569000000' },
    },
  };
  const mockStore: MockStoreCreator = configureStore();
  let store: MockStore;
  let tree: ReactTestRenderer;

  beforeAll(() => {
    store = mockStore(initialState);
    tree = renderer.create(
      <Provider store={store}>
        <TicketPicker {...props} />
      </Provider>,
    );
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
