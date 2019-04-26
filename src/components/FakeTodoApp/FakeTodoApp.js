import React from "react";

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

const todoStyle = { width: "600px", margin: "100px auto" };

function FakeTodoApp() {
  const handelClick = e => {
    e.preventDefault();
    alert("請先登入以使用功能！");
  };

  return (
    <div style={todoStyle}>
      <h1 className="text-center mb-3">Todo List</h1>
      <form className="d-flex mb-2" onSubmit={handelClick}>
        <div className="form-group mb-0 mr-2" style={formGroupStyle}>
          <input
            type="text"
            className="form-control"
            style={inputStyle}
            placeholder="Enter new todo"
          />
        </div>
        <button type="submit" className="btn btn-primary" style={btnGroupStyle}>
          Submit
        </button>
      </form>
      <ul className="list-group">
        <li className="list-group-item mb-2 d-flex align-items-center">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              name="completed"
              id="checkbox1"
              onClick={handelClick}
            />
            <label className="custom-control-label" htmlFor="checkbox1" />
          </div>
          <p className="mb-0 pl-2">第一件事</p>
          <button style={btnStyle} onClick={handelClick}>
            &times;
          </button>
        </li>
        <li className="list-group-item mb-2 d-flex align-items-center">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              name="completed"
              id="checkbox2"
              onClick={handelClick}
            />
            <label className="custom-control-label" htmlFor="checkbox2" />
          </div>
          <p className="mb-0 pl-2">第二件事</p>
          <button style={btnStyle} onClick={handelClick}>
            &times;
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FakeTodoApp;
