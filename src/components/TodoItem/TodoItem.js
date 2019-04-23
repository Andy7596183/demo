import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../../actions/todos.actions";

const itemStyle = {
  opacity: 1
};

const btnStyle = {
  width: "30px",
  height: "30px",
  lineHeight: 0,
  marginLeft: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#cb3365",
  color: "#fff",
  border: 0,
  borderRadius: "2px"
};

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.todo.title,
      completed: props.todo.completed
    };
  }

  static propTypes = {
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  };

  static defaultProps = {
    userId: 0,
    id: 0,
    title: "Todo 0",
    completed: false
  };

  componentDidMount() {
    const { todo } = this.props;
    if (todo.completed) {
      this.itemRef.style.backgroundColor = "#d3d3d3";
    } else {
      this.itemRef.style.backgroundColor = "#fff";
    }
  }

  componentDidUpdate() {
    const { todo } = this.props;
    if (todo.completed) {
      this.itemRef.style.backgroundColor = "#d3d3d3";
    } else {
      this.itemRef.style.backgroundColor = "#fff";
    }
  }

  // update title or completed
  handleChange = async e => {
    const { todo, updateTodo } = this.props;
    await this.setState({
      [e.target.name]:
        e.target.checked !== null ? e.target.checked : e.target.value
    });
    updateTodo({ ...todo, completed: this.state.completed });
  };

  handleDelete = id => () => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };

  render() {
    const { todo } = this.props;

    return (
      <li
        className="list-group-item mb-2 d-flex align-items-center"
        style={itemStyle}
        ref={item => (this.itemRef = item)}
      >
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            name="completed"
            id={`customCheck${todo.id}`}
            onChange={this.handleChange}
            checked={todo.completed}
          />
          <label
            className="custom-control-label"
            htmlFor={`customCheck${todo.id}`}
          />
        </div>
        <p className="mb-0 pl-2">{todo.title}</p>
        <button onClick={this.handleDelete(todo.id)} style={btnStyle}>
          &times;
        </button>
      </li>
    );
  }
}

export default connect(
  null,
  { updateTodo, deleteTodo }
)(TodoItem);
