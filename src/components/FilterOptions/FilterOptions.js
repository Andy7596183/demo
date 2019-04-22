import React from "react";
import { changeFilter, deleteCompleted } from "../../actions/todos.actions";
import { connect } from "react-redux";

const filterStyle = {
  marginRight: "5px",
  cursor: "pointer"
};

function FilterOptions({ todosFilter, changeFilter, deleteCompleted }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        {/* eslint-disable-next-line */}
        <a
          className="nav-link p-1 active"
          style={{
            ...filterStyle,
            color: todosFilter === "all" ? "skyblue" : "#000"
          }}
          onClick={changeFilter("all")}
        >
          全部
        </a>
      </li>
      <li className="nav-item">
        {/* eslint-disable-next-line */}
        <a
          className="nav-link p-1"
          style={{
            ...filterStyle,
            color: todosFilter === "active" ? "skyblue" : "#000"
          }}
          onClick={changeFilter("active")}
        >
          未完成
        </a>
      </li>
      <li className="nav-item">
        {/* eslint-disable-next-line */}
        <a
          className="nav-link p-1"
          style={{
            ...filterStyle,
            color: todosFilter === "completed" ? "skyblue" : "#000"
          }}
          onClick={changeFilter("completed")}
        >
          已完成
        </a>
      </li>
      <li className="nav-item ml-auto">
        {/* eslint-disable-next-line */}
        <a className="nav-link p-1" onClick={deleteCompleted}>
          清除
        </a>
      </li>
    </ul>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    todosFilter: state.todosFilter
  };
};

const mapActionToProps = dispatch => {
  return {
    changeFilter: filter => () => dispatch(changeFilter(filter)),
    deleteCompleted: () => dispatch(deleteCompleted())
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(FilterOptions);
