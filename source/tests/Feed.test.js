import React from 'react';
import renderer from 'react-test-renderer';
import Feed from "../screens/Feed";

const dataMock = [{
    "_id": {
        "$oid": "5b8701a1fc13ae6569000000"
    },
    "title": "Long Live Death (Viva la muerte)",
    "price": 28.704,
    "inventory": 4,
}, {
    "_id": {
        "$oid": "5b8701a1fc13ae6569000001"
    },
    "title": "Home",
    "price": 10.622,
    "inventory": 3,
}];

test('<Feed> renders correctly when loading', () => {
    const tree = renderer.create(<Feed loading={true} data={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('<Feed> renders correctly when loaded', () => {
    const tree = renderer.create(<Feed loading={false} data={dataMock} />).toJSON();
    expect(tree).toMatchSnapshot();
});