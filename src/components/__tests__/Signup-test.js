import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SignUp from '../SignUp'



describe('Sign Up Component', () => {
 it('should render without throwing an error', () => {
   expect(mount(<SignUp />).find('#signup').exists()).toBe(true)
 })
 it('renders a firstname input', () => {
  expect(mount(<SignUp />).find('#firstname').length).toEqual(1)
 })
 it('renders a lastname input', () => {
  expect(mount(<SignUp />).find('#lastname').length).toEqual(1)
 })
 it('renders a email input', () => {
  expect(mount(<SignUp />).find('#email').length).toEqual(1)
 })
it('renders a password input', () => {
  expect(mount(<SignUp />).find('#password').length).toEqual(1)
 })
})


describe('Signup Check', () => {
  it('Sign Up', () => {
   const wrapper = mount(<SignUp />);
   window.alert = jest.fn();
   wrapper.find('#firstname').simulate('change', {target: {name: 'firstname', value: 'firstname'}});
   wrapper.find('#lastname').simulate('change', {target: {name: 'lastname', value: 'lastname'}});
   wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'test@example.com'}});
   wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});
   wrapper.find('#btn').simulate('click');
   // expect(window.alert).toBeCalled("Login Success");
  })
 })
