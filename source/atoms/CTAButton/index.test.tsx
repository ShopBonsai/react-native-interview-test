import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import CTAButton, { Props } from '.';

describe('CTAButton Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      color: 'blue',
      iconName: 'rocket',
      onPress: jest.fn(),
    };
    tree = renderer.create(<CTAButton {...props}>Mock</CTAButton>);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
