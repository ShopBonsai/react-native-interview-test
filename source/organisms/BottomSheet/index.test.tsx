import React from 'react';
import { Text } from 'react-native';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import BottomSheet, { Props } from '.';

describe('BottomSheet Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      visible: true,
      onClose: jest.fn(),
    };
    tree = renderer.create(
      <BottomSheet {...props}>
        <Text>Mock</Text>
      </BottomSheet>,
    );
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
