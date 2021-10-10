import React from 'react';
import { shallow } from 'enzyme';
import { Hotel } from './index';

describe('<Hotel/> Component test', () => {
  const props = {
    name: "Hotel",
    price: '300',
    city: 'City',
    available_on: '25-10-2021',
  };
  const hotelInstance = shallow(<Hotel {...props} />);

  it('<Hotel/> test rendering', () => {
    expect(hotelInstance.find('.card')).toHaveLength(1);
    expect(hotelInstance.find('.row')).toHaveLength(3);
  });

  it('<Hotel/> renders data correctly', () => {
    const rows = hotelInstance.find('.row');
    expect(rows.at(0).contains(props.name));
    expect(rows.at(1).contains(props.price));
    expect(rows.at(2).contains(props.city));
  });
});
