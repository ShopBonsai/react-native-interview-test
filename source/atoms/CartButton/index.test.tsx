import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import CartButton, { Props } from '.';

describe('CartButton Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      color: 'blue',
      size: 30,
      onPress: jest.fn(),
    };
    tree = renderer.create(<CartButton {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
