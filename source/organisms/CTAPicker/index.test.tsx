import React from 'react';
import { Text } from 'react-native';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import CTAPicker, { Props } from '.';

describe('CTAPicker Organism', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      options: [
        { label: <Text>mock</Text>, value: 1 },
        { label: 'mock', value: 2 },
      ],
      placeholer: 'mock',
    };
    tree = renderer.create(<CTAPicker {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
