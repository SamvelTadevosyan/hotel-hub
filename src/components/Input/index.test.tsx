import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './index';

describe('<Input/> Component test', () => {
  const tCb = jest.fn();
  const props = {
    onChange: jest.fn(),
  };

  const inputInstance = shallow(<Input {...props} />);

  it('<Input/> test rendering', () => {
    expect(tCb.mock.calls).toHaveLength(0);
    expect(inputInstance.find('input')).toHaveLength(1);
  });

  it('<Input/>  should set the range value on change event', () => {
    inputInstance.find('input').simulate('change', {
      target: {
        value: 'some value',
      },
    });
    expect(inputInstance.find('input').prop('value')).toEqual(
      'some value',
    );
  });
});
