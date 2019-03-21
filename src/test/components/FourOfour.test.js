import React from 'react';
import { shallow } from 'enzyme';
import FourOfour from '../../components/FourOfour';

test('should render FourOfour', () => {
  const wrapper = shallow(<FourOfour />);
  expect(wrapper).toMatchSnapshot();
});
