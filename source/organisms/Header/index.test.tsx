import React from 'react';
import { Text } from 'react-native';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import Header, { Props } from '.';

describe('Header Organism', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      navigation: {
        state: {
          index: 0,
          routes: [
            {
              index: 1,
              routes: [
                { routeName: 'Feed' },
                { routeName: 'Favorites' },
                { routeName: 'Tickets' },
              ],
            },
          ],
        },
      },
    };
    tree = renderer.create(
      <Header {...props}>
        <Text>Mock</Text>
      </Header>,
    );
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
