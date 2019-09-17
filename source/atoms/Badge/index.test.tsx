import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import Badge, { Props } from '.';

describe('Badge Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      color: 'blue',
      countColor: 'grey',
      count: 1,
      size: 40,
    };
    tree = renderer.create(<Badge {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
