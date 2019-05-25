import React from 'react';
import renderer from 'react-test-renderer';
import Main from "../screens/Main";
import 'isomorphic-fetch';

test('<Main> renders correctly', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
});