import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

export default connect(
  undefined,
  dispatch => ({
    startLogin: () => dispatch(startLogin())
  })
)(Login);
