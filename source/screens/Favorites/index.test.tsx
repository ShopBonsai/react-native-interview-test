import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import Favorites from '.';

describe('Favorites Screen', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: any = {};
    tree = renderer.create(<Favorites {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
