import React, { Component, PropTypes } from 'react';

import Login from '../containers/login';
import Logout from './logout';
import { logoutUser } from '../actions';

export default class Navbar extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return <nav className="navbar navbar-dark bg-inverse">
      <div className='container-fluid'>
        <a className="navbar-brand" href="/">Devschool Sessions</a>
        <div className="form-inline pull-xs-right">
          {!isAuthenticated &&
            <Login errorMessage={errorMessage} />
          }

          {isAuthenticated &&
            <Logout onLogoutClick={() => dispatch(logoutUser())} />
          }
        </div>
      </div>
    </nav>
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};
