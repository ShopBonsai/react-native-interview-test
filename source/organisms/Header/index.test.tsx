import React, { Fragment } from 'react';
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
      paths: [
        {
          name: 'mock',
          iconName: 'rocket',
          screen: Fragment,
        },
      ],
    };
    tree = renderer.create(<Header {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
