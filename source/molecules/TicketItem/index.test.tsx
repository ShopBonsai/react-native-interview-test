import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import TicketItem, { Props } from '.';

describe('TicketItem Molecule', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      amount: 2,
      onPress: jest.fn(),
      subtitle: 'mock',
      title: 'Mock',
    };
    tree = renderer.create(<TicketItem {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
