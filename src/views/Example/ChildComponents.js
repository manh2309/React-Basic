import React from "react";
import "./Demo.scss";
class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  /*
JSX  return block trả về 1 phần tử của html
Fragment
Khai báo state: là 1 obj
DOM EVENT
Chaining State
Form
Nesting Components
props
outputting list
Conditional output
*/
  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };
  handleDelete = (job) => {
    console.log(">>Check id: ", job);
    this.props.DeleteAgeJob(job);
  };
  render() {
    console.log(">>> Check props: ", this.props);
    // let name = this.props.name;
    let { arrJob } = this.props;
    let { showJob } = this.state;
    let check = showJob === true ? "showJob = true" : "showJob = false";
    let a = "";
    return (
      <>
        {showJob === false ? (
          <div>
            <button
              className="btn btn-Show"
              onClick={() => this.handleShowHide()}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {
                (a = arrJob.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary} ${" "}
                      <button
                        onClick={() => {
                          this.handleDelete(item);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );
                }))
              }
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   let { arrJob } = props;
//   return (
//     <>
//       <div className="job-list">
//         {arrJob.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary} $
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
