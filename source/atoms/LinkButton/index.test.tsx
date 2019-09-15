import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import LinkButton, { Props } from '.';

describe('LinkButton Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      onPress: jest.fn(),
    };
    tree = renderer.create(<LinkButton {...props}>Mock</LinkButton>);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
