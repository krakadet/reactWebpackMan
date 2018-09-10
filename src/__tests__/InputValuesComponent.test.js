// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { InputValuesComponent } from '../InputValueComponent/InputValuesComponent';
import {shallow} from "enzyme";


// Manual mocking
const fetchPromise = Promise.resolve({
  json: () => Promise.resolve({columnCount: 2, rowCount: 2, lightCount: 2}),
})
global.fetch = () => fetchPromise;

it('renders correctly', () => {
  const profile = {name: test,rowValue: 2, columnValue: 2, lightValue: 2};
  const component = renderer.create(
    <InputValuesComponent profile={profile}/>,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();


});
