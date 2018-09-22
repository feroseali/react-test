import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import {signUpAction} from '../../actions'


const UserForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    resetForm,
    handleReset
  } = props;

  const _handleSelect = (selectChoice) => {
    setFieldValue('imaginaryThingId', selectChoice.value);
  };

  return(
    <div className="container">
  <form onSubmit={handleSubmit} id="signup">
    <h1>Sign Up</h1>
    <div className="form-group">
    <input name="firstname" type="text" id="firstname"
              className={`form-control ${errors.firstname && touched.firstname && 'is-invalid'}`}
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur} />
      <label htmlFor="input" className="control-label">First Name</label><i className="bar"></i>
      {errors.firstname && touched.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
    </div>
    <div className="form-group">
    <input name="lastname" type="text" id="lastname"
              className={`form-control ${errors.lastname && touched.lastname && 'is-invalid'}`}
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur} />
      <label htmlFor="input" className="control-label">Last Name</label><i className="bar"></i>
      {errors.lastname && touched.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
    </div>
    <div className="form-group">
    <input name="email" type="text" id="email"
                className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur} />
              <label htmlFor="input" className="control-label">Email</label><i className="bar"></i>
              {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
    </div>
    <div className="form-group">
    <input name="password" type="password" id="password"
                className={`form-control ${errors.password && touched.password && 'is-invalid'}`}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur} />
              <label htmlFor="input" className="control-label">Password</label><i className="bar"></i>
              {errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}
    </div>
    <div className="button-container">
    <button className="button" type="submit" id="btn" disabled={isSubmitting}>
              <span>{isSubmitting ? 'WAIT' : 'SIGN UP'}</span>
            </button>
    </div>
  </form>
</div>
  );
}

export default withFormik({
  mapPropsToValues: (props) => ({
    email: props.user.email,
    firstname: props.user.firstname,
    lastname: props.user.lastname,
    password:props.user.password,
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    password: Yup.string().required('Password Required!').test('len', 'Must be atleast 5 characters', val => val?val.length >= 5:false),
    firstname: Yup.string().required('Firstname Required!'),
    lastname: Yup.string().required('Last Name Required!'),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    signUpAction(values)
    setSubmitting(false);

  },
})(UserForm);
