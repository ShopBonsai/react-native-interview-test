import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import ErrorMessage, { Props } from '.';

describe('ErrorMessage Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      color: 'yellow',
      size: 40,
    };
    tree = renderer.create(<ErrorMessage {...props}>Mock</ErrorMessage>);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
