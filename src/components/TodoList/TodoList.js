import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTodos } from "../../actions/todos.actions";
import TodoItem from "../TodoItem/TodoItem";

const emptyStyle = {
  padding: "50px 0"
};

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user_id: PropTypes.number.isRequired,
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
    if (todos.length !== 0) {
      return (
        <ul className="list-group">
          {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      );
    } else {
      return (
        <div className="text-center" style={emptyStyle}>
          沒有事項喔!
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.todosFilter === "all") {
    return {
      todos: state.todos
    };
  } else if (state.todosFilter === "active") {
    return {
      todos: state.todos.filter(todo => todo.completed === false)
    };
  } else {
    return {
      todos: state.todos.filter(todo => todo.completed === true)
    };
  }
};

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
