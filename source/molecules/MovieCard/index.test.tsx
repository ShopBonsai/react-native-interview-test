import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import MovieCard, { Props } from '.';

describe('MovieCard Molecule', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      image: 'http://dummyimage.com/1459x751.png/cc0000/ffffff',
      isFavorite: true,
      onFavorite: jest.fn(),
      onPress: jest.fn(),
      subtitle: 'mock',
      title: 'Mock',
    };
    tree = renderer.create(<MovieCard {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
