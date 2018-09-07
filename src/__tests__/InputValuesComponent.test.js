// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { InputValuesComponent } from '../InputValueComponent/InputValuesComponent';

it('renders correctly', () => {
  const component = renderer.create(
    <InputValuesComponent />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();
tree.props.createTableAction();
tree = component.toJSON();
expect(tree).toMatchSnapshot();


tree.props.updateInputsValue();

tree = component.toJSON();
expect(tree).toMatchSnapshot();
});