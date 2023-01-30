import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   // console.log("check", props)
    //   this.props.history.push("/todo");
    //   // this.props.history.push("/about");
    // }, 3000);
  }
  render() {
    console.log("Check props:", this.props);
    return <div>Hello World from Home!</div>;
  }
}
// export default withRouter(Home);
export default Color(Home);
