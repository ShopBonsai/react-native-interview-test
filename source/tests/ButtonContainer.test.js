import React from 'react';
import renderer from 'react-test-renderer';
import ButtonContainer from "../screens/ButtonContainer";

test('<ButtonContainer> renders correctly', () => {
    const tree = renderer.create(<ButtonContainer />).toJSON();
    expect(tree).toMatchSnapshot();
});