import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import Placeholder, { Props } from '.';

describe('Placeholder Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      iconName: 'rocket',
      color: 'blue',
      size: 40,
    };
    tree = renderer.create(<Placeholder {...props}>Mock</Placeholder>);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
