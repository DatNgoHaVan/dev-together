import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import { StoreRootState } from "../../reducers/root/root-reducer";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }: any) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href='/#'>
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href="/#">Developers</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i>
          Dev-Together
        </Link>
      </h1>
      {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
    </nav>
  );
};

Navbar.propsTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state: StoreRootState, ownProps: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
