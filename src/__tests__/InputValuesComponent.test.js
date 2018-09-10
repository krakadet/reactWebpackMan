// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { InputValuesComponent } from '../InputValueComponent/InputValuesComponent';


// Manual mocking
const fetchPromise = Promise.resolve({
  json: () => Promise.resolve({Rick: `I turned myself into a pickle, Morty!`}),
})
global.fetch = () => fetchPromise

it('renders correctly', () => {
  const profile = {name: test,rowValue: 2, columnValue: 2, lightValue: 2};
  const component = renderer.create(
    <InputValuesComponent profile={profile}/>,
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

test(`on a React component that loads data into state in componentDidMount`, async () => {
    const wrapper = shallow(<InputValuesComponent />)

    await wrapper.instance().componentDidMount()
    // Much less robust, you need to ensure that the sleeping time is greater than the time it takes to resolve the
    // fetch, play with values less than or greater than L18 above to see how the component changes
    // await sleep(DELAY_MS - 1000)
    // await sleep(DELAY_MS + 1000)

    // State can be tested here, but not DOM properties, because setState happens in... the future!
    // This is more of an Enzyme thing, I suspect
    expect(wrapper.state(`data`)).toHaveProperty(`Rick`, `I turned myself into a pickle, Morty!`)
    expect(wrapper.text()).not.toEqual(JSON.stringify({Rick: `I turned myself into a pickle, Morty!`}))

    // Force update to sync component with state
    wrapper.update()
    expect(wrapper.text()).toBe(`{"Rick":"I turned myself into a pickle, Morty!"}`)
})