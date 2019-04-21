import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList/TodoList";
import ErrorBoundary from "../../ErrorBoundary";

class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <ErrorBoundary>
          <TodoList />
        </ErrorBoundary>
      </>
    );
  }
}

export default Home;
