import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import DeleteButton, { Props } from '.';

describe('DeleteButton Atom', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      color: 'blue',
      size: 30,
      onDelete: jest.fn(),
    };
    tree = renderer.create(<DeleteButton {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
