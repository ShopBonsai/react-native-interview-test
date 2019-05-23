import React from 'react';
import renderer from 'react-test-renderer';
import MovieRow from '../screens/MovieRow';
import Button from '../screens/Button';

const movieMock = {
  "_id": {
    "$oid": "5b8701a1fc13ae6569000000"
  },
  "title": "Long Live Death (Viva la muerte)",
  "price": 28.704,
  "inventory": 4,
};

const likeMovie = jest.fn();

test('<MovieRow> renders correctly', () => {
  const tree = renderer.create(<MovieRow movie={movieMock} likeMovie={likeMovie} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('<MovieRow> like function gets called', () => {
  const rendered = renderer.create(<MovieRow movie={movieMock} likeMovie={likeMovie} />);
  const instance = rendered.root;
  const likeButton = instance.findAllByType(Button)[0];
  likeButton.props.onPress();
  expect(likeMovie.mock.calls.length).toBe(1);
});