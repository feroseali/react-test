import React from 'react';
import { compose,withHandlers } from 'recompose'
import LoginForm from './LoginForm'

const baseUser ={
  email:"",
  password:"",
}
function Login (props: Props) {
  return (
    <div>
      <LoginForm user={baseUser}/>
    </div>
  )
}
export default compose(
  withHandlers({
  })
)(Login)
