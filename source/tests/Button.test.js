import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../screens/Button';

test('<Button> renders correctly', () => {
    const onPress = () => {};
    const text = 'text';
    const tree = renderer.create(<Button onPress={onPress} text={text}/>).toJSON();
    expect(tree).toMatchSnapshot();
});