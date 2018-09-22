import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from '../Login'



describe('Login Component', () => {
 it('should render without throwing an error', () => {
   expect(mount(<Login />).find('#login').exists()).toBe(true)
 })
 it('renders a email input', () => {
  expect(mount(<Login />).find('#email').length).toEqual(1)
 })
it('renders a password input', () => {
  expect(mount(<Login />).find('#password').length).toEqual(1)
 })
})


describe('Login Check', () => {
  it('Should Provide an alert', () => {
   const wrapper = mount(<Login />);
   window.alert = jest.fn();
   wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
   wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});
   wrapper.find('#btn').simulate('click');
   // expect(window.alert).toBeCalled("Login Success");
  })
 })
