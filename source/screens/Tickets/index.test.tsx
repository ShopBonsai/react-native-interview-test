import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import Tickets from '.';

describe('Tickets Screen', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: any = {};
    tree = renderer.create(<Tickets {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
