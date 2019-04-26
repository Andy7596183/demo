import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth.actions";

const Navbar = ({ isLogin, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            首頁
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto flex-row">
        <li className="nav-item mr-2">
          {!isLogin && (
            <button className="btn btn-primary">
              <Link to="/register" style={{ color: "#fff" }}>
                註冊
              </Link>
            </button>
          )}
        </li>
        <li className="nav-item">
          {isLogin ? (
            <button
              className="btn btn-danger"
              style={{ color: "#fff" }}
              onClick={logout}
            >
              登出
            </button>
          ) : (
            <button className="btn btn-success">
              <Link to="/login" style={{ color: "#fff" }}>
                登入
              </Link>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLogin: state.auth.isLogin
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
