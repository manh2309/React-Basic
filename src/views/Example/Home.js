import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/freza.jpg";
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   // console.log("check", props)
    //   this.props.history.push("/todo");
    //   // this.props.history.push("/about");
    // }, 3000);
  }
  handleDelete = (users) => {
    console.log(">>Check users: ", users);
    this.props.deleteUserRedux(users);
  };
  hanldeAddnew = () => {
    this.props.addnewUserRedux();
  };
  render() {
    console.log("Check props:", this.props);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello World from Home!</div>
        <div>
          <img src={logo} width="200px" />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {" "}
                  {index + 1} - {item.name} -{" "}
                  <span onClick={() => this.handleDelete(item)}>x</span>
                </div>
              );
            })}
          <button onClick={() => this.hanldeAddnew()}>Add New</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addnewUserRedux: () => dispatch({ type: "ADD_USER" }),
  };
};
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
