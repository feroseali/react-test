import React from 'react';
import { compose,withHandlers } from 'recompose'
import UserForm from './UserForm'


const baseUser ={
  email:"",
  username:"",
  firstname:"",
  lastname:"",
  password:"",
}

function SignUp (props: Props) {
  return (
    <div>
      <UserForm user={baseUser}/>
    </div>
  )
}

export default compose(
  withHandlers({

  })
)(SignUp)
