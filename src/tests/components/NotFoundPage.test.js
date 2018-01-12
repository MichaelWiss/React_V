import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/NotFoundPage';


test('should render notFoundPage correctly', () => {
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot(); 
});
