import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
      </>
    );
  }
}

export default Login;
