import React from 'react';
import { shallow } from 'enzyme';
import { Range } from './index';

describe('<Range/> Component test', () => {
  const tCb = jest.fn();
  const props = {
    label: 'Range',
    onChange: jest.fn(),
  };

  const inputInstance = shallow(<Range {...props} />);

  it('<Range/> test rendering', () => {

    expect(tCb.mock.calls).toHaveLength(0);
    expect(inputInstance.find('input')).toHaveLength(1);
  });

  it('<Range/> should have right props', () => {
    expect(inputInstance.find('input').props()).toEqual({
      id: 'price',
      type: 'range',
      max: 100,
      min: 10,
      step: 1,
      value: '',
      onChange: expect.any(Function),
    });
  })

  it('<Range/>  should set the range value on change event', () => {
    inputInstance.find('input').simulate('change', {
      target: {
        value: '50',
      },
    });
    expect(inputInstance.find('input').prop('value')).toEqual(
      '50',
    );
  });

});
