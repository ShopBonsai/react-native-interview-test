import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import configureStore, { MockStoreCreator, MockStore } from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ApplicationState } from '../../store/ducks';

import FeedMovieList from '.';

describe('FeedMovieList Container', () => {
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
  const mockStore: MockStoreCreator = configureStore();
  let store: MockStore;
  let tree: ReactTestRenderer;

  beforeAll(() => {
    store = mockStore(initialState);
    tree = renderer.create(
      <Provider store={store}>
        <FeedMovieList />
      </Provider>,
    );
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
