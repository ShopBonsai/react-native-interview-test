import React from 'react';
import { View } from 'react-native';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import withSafeArea from '.';

describe('withSafeArea HOC', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const Component: React.ComponentType = () => <View />;
    const EnhancedComponent: React.ComponentType = withSafeArea(Component);
    tree = renderer.create(<EnhancedComponent />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
