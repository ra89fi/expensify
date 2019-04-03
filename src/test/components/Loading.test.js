import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/Loading';

test('should render Loading correctly', () => {
  const wrapper = shallow(<Loading />);
  expect(wrapper).toMatchSnapshot();
});
