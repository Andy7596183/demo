import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth.actions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { login, history } = this.props;
    login(this.state, () => history.push("/"));
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    const { username, password } = this.state;
    const { error } = this.props;

    return (
      <>
        <h1 className="text-center mt-5">登入</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="帳號"
            />
            {error && (
              <div className="alert alert-danger mt-2" role="alert">
                {error}
              </div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="密碼"
            />
            {error && (
              <div className="alert alert-danger mt-2" role="alert">
                {error}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            送出
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.auth.loginErr
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
