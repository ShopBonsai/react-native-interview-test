import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import CTAText, { Props } from '.';

describe('CTAText Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      color: 'blue',
      size: 18,
    };
    tree = renderer.create(<CTAText {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
