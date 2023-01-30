import React from "react";
import axios from "axios";
import "./ListUsers.scss";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //   console.log(">>Check res:", res);
    // });
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
    console.log(">>Check res:", res);
  }
  handleOnclickDetail = (user) => {
    this.props.history.push(`/users/${user.id}`);
  };
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="tilte"></div>
        <div className="list-user-content">
          Fecth all list user
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleOnclickDetail(item)}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default withRouter(ListUser);
