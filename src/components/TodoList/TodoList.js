import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTodos } from "../../actions/todos.actions";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      })
    )
  };

  static defaultProps = {
    todos: [{ userId: 0, id: 0, title: "title 0", completed: false }]
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
