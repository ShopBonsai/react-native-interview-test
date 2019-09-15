import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import FavoriteButton, { Props } from '.';

describe('FavoriteButton Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      color: 'blue',
      size: 30,
      onPress: jest.fn(),
    };
    tree = renderer.create(<FavoriteButton {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
