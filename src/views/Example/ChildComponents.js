import React from "react";

class ChildComponent extends React.Component {
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
    console.log(">>> Check props: ", this.props);
    // let name = this.props.name;
    let { name } = this.props;
    return (
      <>
        <div>ChildComponent: {name}</div>
      </>
    );
  }
}
export default ChildComponent;
