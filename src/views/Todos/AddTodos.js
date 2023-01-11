import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
  state = {
    name: "",
    description: "",
  };

  handleNameOnchange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleDesOnchange = (event) => {
    this.setState({ description: event.target.value });
  };
  handleSubmit = () => {
    // event.preventDefault();
    if (!this.state.description && !this.state.name) {
      toast.error("Hãy nhập dữ liệu");
      return;
    }
    this.props.addNewTodos({
      id: Math.floor(Math.random() * 100),
      name: this.state.name,
      description: this.state.description,
    });
    this.setState({
      name: "",
      description: "",
    });
  };
  render() {
    let { name, description } = this.state;
    return (
      <>
        <form>
          <label htmlFor="name">Name:</label> <br />
          <input
            type="text"
            value={name}
            onChange={(event) => {
              this.handleNameOnchange(event);
            }}
          />
          <br />
          <label htmlFor="description">description:</label> <br />
          <input
            type="text"
            value={description}
            onChange={(event) => {
              this.handleDesOnchange(event);
            }}
          />
          <br />
          <button
            type="button"
            className="add"
            onClick={(event) => {
              this.handleSubmit(event);
            }}
          >
            Add
          </button>
        </form>
      </>
    );
  }
}
export default AddTodo;
