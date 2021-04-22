import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import { startLogout } from '../../actions/auth';

let wrapper, startLogin;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test('Should render LoginPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () => {
  wrapper.find('button').prop('onClick')();
  expect(startLogin).toHaveBeenCalled();
});
