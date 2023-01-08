import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleTitleJobOnChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleSalaryOnChange = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault(); // không reload lại page
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
      return;
    }
    console.log(">>> Check submit: ", this.state);
    this.props.AddNewJob({
      id: Math.floor(Math.random() * 100).toString(),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Title Job:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => {
            this.handleTitleJobOnChange(event);
          }}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="number"
          value={this.state.salary}
          onChange={(event) => {
            this.handleSalaryOnChange(event);
          }}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(event) => this.handleSubmit(event)}
        />
      </form>
    );
  }
}

export default AddComponent;
