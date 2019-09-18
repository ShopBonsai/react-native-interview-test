import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import CartItem, { Props } from '.';

describe('CartItem Molecule', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      amount: 2,
      inventory: 3,
      onChange: jest.fn(),
      price: 10,
      subtitle: 'mock',
      title: 'Mock',
    };
    tree = renderer.create(<CartItem {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
