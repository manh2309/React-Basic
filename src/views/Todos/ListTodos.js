import React from "react";
import AddTodo from "./AddTodos";
import "./list.scss";
import { toast } from "react-toastify";
import Color from "../HOC/Color";
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
    editTodo: {},
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
    toast.success("Delete Succsess!");
  };
  handleEdit = (todo) => {
    let { editTodo, listTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //Save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listTodo];
      let ObjIndex = listTodoCopy.findIndex((item) => item.id === todo.id);
      listTodoCopy[ObjIndex].name = editTodo.name;
      listTodoCopy[ObjIndex].description = editTodo.description;
      this.setState({
        listTodo: listTodoCopy,
        editTodo: {},
      });
      toast.success("Update Succsess!");
      return;
    }
    //edit
    console.log(todo);
    this.setState({
      editTodo: todo,
    });
  };
  editNameTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.name = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  editDesTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.description = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <p>TodosApp with ReactJS</p>
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
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.name} - {item.description}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -
                            <input
                              value={editTodo.name}
                              onChange={(event) => this.editNameTodo(event)}
                            />
                            -
                            <input
                              value={editTodo.description}
                              onChange={(event) => this.editDesTodo(event)}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.name} - {item.description}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEdit(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
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
// export default ListTodo;
export default Color(ListTodo);
