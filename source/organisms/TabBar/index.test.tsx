import React, { Fragment } from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import TabBar, { Props } from '.';

describe('TabBar Organism', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      navigation: {
        state: {
          index: 0,
          routes: [
            { routeName: 'Feed' },
            { routeName: 'Favorites' },
            { routeName: 'Tickets' },
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
    tree = renderer.create(<TabBar {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
