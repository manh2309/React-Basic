import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      // axios.get(`https://reqres.in/api/users/${id}`).then((res1) => {
      //   console.log(res1.data.data);
      // });
      console.log(res);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }

  handleOnClickBack = () => {
    this.props.history.push("/users");
  };
  render() {
    let { user } = this.state;

    let isEmptyObj = Object.keys(user).length === 0;
    console.log(">>Check state: ", this.state.user);
    return (
      <>
        {isEmptyObj === false && (
          <>
            <div>
              Users Name: {user.first_name} {user.last_name}
            </div>
            <div>Users Email: {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <button onClick={() => this.handleOnClickBack()}>Back</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
