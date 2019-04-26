import React, { Component } from "react";
import TodoList from "../../components/TodoList/TodoList";
import TodoInput from "../../components/TodoInput/TodoInput";
import FilterOptions from "../../components/FilterOptions/FilterOptions";
import ErrorBoundary from "../../ErrorBoundary";

const todoStyle = { width: "600px", margin: "100px auto" };

class Home extends Component {
  render() {
    return (
      <div style={todoStyle}>
        <ErrorBoundary>
          <TodoInput />
          <TodoList />
          <FilterOptions />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Home;
