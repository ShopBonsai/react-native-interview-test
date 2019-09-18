import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import TicketAmountPicker, { Props } from '.';

describe('TicketAmountPicker Organism', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      price: 10,
      inventory: 10,
    };
    tree = renderer.create(<TicketAmountPicker {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
