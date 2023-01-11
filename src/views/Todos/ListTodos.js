import React from "react";
import AddTodo from "./AddTodos";
import "./list.scss";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    listTodo: [
      {
        id: "1",
        name: "test 1",
        description: "test",
      },
      {
        id: "2",
        name: "test 2",
        description: "test 3",
      },
    ],
  };
  // DeleteAgeJob = (todo) => {
  //   let currentJob = this.state.listTodo;
  //   currentJob = currentJob.filter((item) => item.id !== todo.id);
  //   this.setState({
  //     arrJob: currentJob,
  //   });
  // };
  addNewTodos = (todo) => {
    // let current = this.state.listTodo;
    // current.push(todo);
    this.setState({
      listTodo: [...this.state.listTodo, todo],
      //   listTodo: current,
    });
    toast.success("Wow so easy!");
  };
  handleDelete = (todo) => {
    let currentTodo = this.state.listTodo;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodo: currentTodo,
    });
  };
  render() {
    let { listTodo } = this.state;
    return (
      <>
        <div className="list-todo-container">
          <div className="add-todo">
            <AddTodo addNewTodos={this.addNewTodos} />
          </div>
          <div className="list-todo-content">
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div key={item.id} className="todo-child">
                    <span>
                      {index + 1} - {item.name} - {item.description}
                    </span>
                    <button className="edit">Edit</button>
                    <button
                      className="delete"
                      onClick={() => this.handleDelete(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default ListTodo;
