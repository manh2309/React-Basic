import React from "react";
import ChildComponent from "./ChildComponents";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  /*
JSX  return block trả về 1 phần tử của html
Fragment
Khai báo state: là 1 obj
DOM EVENT
Chaining State
Form
Nesting Components
*/
  // HandleOnchange = (event) => {
  //   //merge state
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };
  // handleOnClick = () => {
  //   alert("Click me");
  // };
  handleFirstOnChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleLastOnChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault(); // không reload lại page
    console.log(">>> Check submit: ", this.state);
    alert(
      "First name " + this.state.firstName + " Last name " + this.state.lastName
    );
  };
  render() {
    // let name = "Manh";
    // {
    //   console.log("My name:", name);
    // }
    return (
      <>
        {/* <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.HandleOnchange(event);
            }}
          />
          Hello my component, my name is {this.state["name"]}!
        </div>
        <div className="second">My channel: {this.state.channel}</div>
        <div className="third">
          <button onClick={() => this.handleOnClick()}>Click me</button>
        </div> */}
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => {
              this.handleFirstOnChange(event);
            }}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => {
              this.handleLastOnChange(event);
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
        <ChildComponent name={"name One"} />
      </>
    );
  }
}
export default MyComponent;
