import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import configureStore, { MockStoreCreator, MockStore } from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ApplicationState } from '../../store/ducks';

import FavoritesMovieList from '.';

describe('FavoritesMovieList Container', () => {
  const initialState: ApplicationState = {
    feed: {
      loading: false,
      movies: [],
      movie: {},
      page: 1,
      pageSize: 5,
      errorMessage: '',
    },
    favorites: {
      favorites: [],
    },
  };
  const mockStore: MockStoreCreator = configureStore();
  let store: MockStore;
  let tree: ReactTestRenderer;

  beforeAll(() => {
    store = mockStore(initialState);
    tree = renderer.create(
      <Provider store={store}>
        <FavoritesMovieList />
      </Provider>,
    );
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
