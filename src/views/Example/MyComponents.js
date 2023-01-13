import React from "react";
import AddComponent from "./AddComponents";
import ChildComponent from "./ChildComponents";

class MyComponent extends React.Component {
  state = {
    arrJob: [
      { id: "abc1", title: "Developers", salary: "500" },
      { id: "abc2", title: "Developers1", salary: "400" },
      { id: "abc3", title: "Tester", salary: "700" },
    ],
    // editJob: {},
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
  AddNewJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
    console.log(">>> Check job", job);
  };
  EditAgeJob = (job) => {
    // let { arrJob, editJob } = this.state;
    // let listJobCopy = job;
    // arrJob = {};
    // let ObjIndex = listJobCopy.findIndex((item) => item.id === job.id);
    // listJobCopy[ObjIndex].title = job.title;
    // listJobCopy[ObjIndex].salary = job.salary;
    this.setState({
      arrJob: [...job],
      // editJob: {},
    });
  };
  DeleteAgeJob = (job) => {
    let currentJob = this.state.arrJob;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJob: currentJob,
    });
  };
  //So sánh data hiện tại, quá khứ
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">> run did update: ",
      "prev Sate:",
      prevState,
      "current State: ",
      this.state
    );
  }
  //Thích hợp để gọi API sau này
  componentDidMount() {
    console.log(">> run component did mount");
  }
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
        <AddComponent AddNewJob={this.AddNewJob} />
        <ChildComponent
          arrJob={this.state.arrJob}
          // editJob={this.state.editJob}
          DeleteAgeJob={this.DeleteAgeJob}
          EditAgeJob={this.EditAgeJob}
        />
      </>
    );
  }
}
export default MyComponent;
