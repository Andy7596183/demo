import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { Spring } from "react-spring/renderprops";
import { updateTodo, deleteTodo } from "../../actions/todos.actions";
// import styles from "./todoItem.module.css";

// const itemStyle = {
//   opacity: 0,
//   transition: "opacity 10s ease"
// };

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

export class TodoItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: props.todo.title,
      completed: props.todo.completed,
      show: false
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
    this.setState({ show: true });
  }

  componentWillUnmount() {
    this.setState({ show: false });
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
        style={{ backgroundColor: todo.completed ? "#d3d3d3" : "#fff" }}
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
