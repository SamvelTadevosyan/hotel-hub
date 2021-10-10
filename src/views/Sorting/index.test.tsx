import React from 'react';
import { shallow, mount } from 'enzyme';
import { Sorting } from './index';

describe('<Sorting/> Component test', () => {
  const handleSort = jest.fn();
  const emptyCallback = null;

  const props = {
    data: [
      {
        name: "Hotel",
        price: '300',
        city: 'City',
        available_on: '01-10-2021',
      },
      {
        name: "Motel",
        price: '500',
        city: 'City',
        available_on: '25-10-2021',
      }
    ],
    onSort: handleSort,
  };
  const sortInstance = mount(<Sorting {...props} />);

  it('<Sorting/> valid callback', () => {
    sortInstance.find('button').at(0).simulate('click', 'name');
    expect(handleSort.mock.calls).toHaveLength(1);
  });

  it('<Sorting/> invalid callback', () => {
    sortInstance.setProps({ onSort: emptyCallback });
    sortInstance.find('button').at(0).simulate('click', 'name');
    expect(handleSort.mock.calls).toHaveLength(0);
  });

  it('<Sorting/> empty Data', () => {
    sortInstance.setProps({ data: [] });
    sortInstance.find('button').at(0).simulate('click', 'name');
    expect(handleSort.mock.calls).toHaveLength(0);
  });
});
