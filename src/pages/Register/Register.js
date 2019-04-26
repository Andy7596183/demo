import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth.actions";

class Register extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { register, history } = this.props;
    register(this.state, () => history.push("/login"));
    this.setState({
      username: "",
      password: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { username, password, email, phone } = this.state;
    const { error } = this.props;
    return (
      <>
        <h1 className="text-center mt-5">註冊</h1>
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
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="信箱"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="phone"
              value={phone}
              onChange={this.handleChange}
              placeholder="手機碼"
            />
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
    error: state.auth.registerErr
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
