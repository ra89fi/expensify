import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button__logout" onClick={startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

export default connect(
  undefined,
  dispatch => ({
    startLogout: () => dispatch(startLogout())
  })
)(Header);
