import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todos.actions";

const formGroupStyle = {
  flex: 8
};

const inputStyle = {
  borderRadius: 0
};

const btnGroupStyle = {
  flex: 1,
  borderRadius: 0
};

class TodoInput extends Component {
  state = { value: "" };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo({ user_id: 1, title: this.state.value });
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="d-flex mb-2">
        <div className="form-group mb-0 mr-2" style={formGroupStyle}>
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
            onKeyUp={this.handleChange}
            className="form-control"
            style={inputStyle}
            placeholder="Enter new todo"
          />
        </div>
        <button type="submit" className="btn btn-primary" style={btnGroupStyle}>
          Submit
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoInput);
