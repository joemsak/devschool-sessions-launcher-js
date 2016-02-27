import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { loginUser } from '../actions';

class Login extends Component {
  onSubmit(creds) {
    this.props.dispatch(loginUser(creds));
  }

  render() {
    const { fields: { username, password },
            handleSubmit, errorMessage } = this.props;

    return <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <input {...username}
             type='text'
             className="form-control"
             placeholder='Username' />

      <input {...password}
             type='password'
             className="form-control"
             placeholder='Password' />

      <button className="btn btn-primary">Login</button>

      {errorMessage && <p>{errorMessage}</p>}
    </form>
  }
}

Login.propTypes = {
  errorMessage: PropTypes.string,
};

Login = reduxForm({
  form: 'login',
  fields: ['username', 'password'],
})(Login);

export default Login;
