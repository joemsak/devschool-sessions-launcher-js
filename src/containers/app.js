import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Navbar from '../components/navbar'

class App extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        errorMessage={errorMessage}
        dispatch={dispatch}
      />
      <div className='container'>
        Hi
      </div>
    </div>
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

function mapStateToProps(state) {
  const { auth: { isAuthenticated, errorMessage } } = state;

  return {
    isAuthenticated,
    errorMessage,
  }
}

export default connect(mapStateToProps)(App)
