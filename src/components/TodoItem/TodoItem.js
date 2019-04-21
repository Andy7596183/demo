import React from "react";
import PropTypes from "prop-types";

// class TodoItem extends Component {
//   // static propTypes = {
//   //   userId: PropTypes.number.isRequired,
//   //   id: PropTypes.number.isRequired,
//   //   title: PropTypes.string.isRequired,
//   //   completed: PropTypes.bool.isRequired
//   // };

//   // static defaultProps = {
//   //   userId: 0,
//   //   id: 0,
//   //   title: "Todo 0",
//   //   completed: false
//   // };

//   render() {
//     const { title } = this.props;

//     return <li>{title}</li>;
//   }
// }

function TodoItem({ todo }) {
  let itemRef = React.createRef();

  const handleCheckboxClick = () => {
    if (!todo.completed) {
      itemRef.current.style.backgroundColor = "#987";
    } else {
      itemRef.current.style.backgroundColor = "#fff";
    }
  };

  return (
    <li
      className="list-group-item mb-2 d-flex align-items-center"
      ref={itemRef}
    >
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id={`customCheck${todo.id}`}
          onClick={handleCheckboxClick}
        />
        <label
          className="custom-control-label"
          htmlFor={`customCheck${todo.id}`}
        />
      </div>
      <p className="mb-0 pl-2">{todo.title}</p>
      <button className="btn btn-danger ml-auto">&times;</button>
    </li>
  );
}

export default TodoItem;
