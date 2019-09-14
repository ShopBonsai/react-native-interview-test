import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import Main from '.';

describe('Main Screen', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: any = {};
    tree = renderer.create(<Main {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
