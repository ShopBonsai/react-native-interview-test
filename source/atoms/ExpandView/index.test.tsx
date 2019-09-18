import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import ExpandView, { Props } from '.';

describe('ExpandView Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      center: true,
    };
    tree = renderer.create(<ExpandView {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
