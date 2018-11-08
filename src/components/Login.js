import React, { Component } from 'react';
import AuthContext from '../auth-context';

class Login extends Component {
  // feature added in React 16.6: no context.Consumer anymore.
  // 'this.context' is the context defined by contextType.
  static contextType = AuthContext;

  render() {
    return (
      <button onClick={this.context.toggleAuth}>
        {this.context.isAuth ? 'Logout' : 'Login'}
      </button>
    );
  }
}

export default Login;
