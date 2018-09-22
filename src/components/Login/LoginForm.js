import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import {loginAction} from '../../actions'



const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
  } = props;

  const _handleSelect = (selectChoice) => {
    setFieldValue('imaginaryThingId', selectChoice.value);
  };

  return(
    <div className="container">
  <form onSubmit={handleSubmit} id="login">
    <h1>Login</h1>
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
    <button className="button" type="submit" disabled={isSubmitting} id="btn">
              <span>{isSubmitting ? 'WAIT' : 'LOGIN'}</span>
            </button>
    </div>
  </form>
</div>
  );
}

export default withFormik({
  mapPropsToValues: (props) => ({
    email: props.user.email,
    password:props.user.password,
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    password: Yup.string().required('Password Required!').test('len', 'Must be atleast 5 characters', val => val?val.length >= 5:false),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    loginAction(values)
    setSubmitting(false);
  },
})(LoginForm);
