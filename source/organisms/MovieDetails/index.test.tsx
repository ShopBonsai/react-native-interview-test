import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import MovieDetails, { Props } from '.';

describe('MovieDetails Organism', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      movie: {
        date: '2017-09-27T05:06:56Z',
        genre: 'Drama|War',
        image: 'http://dummyimage.com/1459x751.png/cc0000/ffffff',
        inventory: 4,
        price: 28.704,
        title: 'Long Live Death (Viva la muerte)',
        _id: { $oid: '5b8701a1fc13ae6569000000' },
      },
    };
    tree = renderer.create(<MovieDetails {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
