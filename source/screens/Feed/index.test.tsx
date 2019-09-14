import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import Feed from '.';

describe('Feed Screen', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: any = {};
    tree = renderer.create(<Feed {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
