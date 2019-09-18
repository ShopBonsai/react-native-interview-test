import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import TabBarItem, { Props } from '.';

describe('TabBarItem Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      active: true,
      iconName: 'rocket',
    };
    tree = renderer.create(<TabBarItem {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
