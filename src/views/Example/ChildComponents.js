import React from "react";
import "./Demo.scss";
import { toast } from "react-toastify";
class ChildComponent extends React.Component {
  state = {
    showJob: false,
    editJob1: {},
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
  handleEdit = (job) => {
    let { arrJob } = this.props;
    let { editJob1 } = this.state;
    let isEmptyJob = Object.keys(editJob1).length === 0;
    if (isEmptyJob === false && editJob1.id === job.id) {
      console.log(isEmptyJob);
      let listJobCopy = [...arrJob];
      let ObjIndex = listJobCopy.findIndex((item) => item.id === job.id);
      listJobCopy[ObjIndex].title = editJob1.title;
      listJobCopy[ObjIndex].salary = editJob1.salary;
      this.props.EditAgeJob(
        listJobCopy
      );
      this.setState({
        // arrJob: listJobCopy,
        editJob1: {},
      });

      toast.success("Update Succsess!");
      console.log(job);
      return;
    }

    console.log(job);
    this.setState({
      editJob1: job,
    });
  };
  edittileTodo = (event) => {
    let editJobCopy = { ...this.state.editJob1 };
    editJobCopy.title = event.target.value;

    this.setState({
      editJob1: editJobCopy,
    });
  };
  editsalTodo = (event) => {
    let editJobCopy = { ...this.state.editJob1 };
    editJobCopy.salary = event.target.value;
    this.setState({
      editJob1: editJobCopy,
    });
  };
  render() {
    console.log(">>> Check props: ", this.props);
    // let name = this.props.name;
    let { arrJob } = this.props;

    let { showJob, editJob1 } = this.state;
    // let isEmptyJob = Object.keys(editJob1).length === 0;
    let isEmptyJob = Object.keys(editJob1).length === 0;

    console.log(isEmptyJob);
    console.log(">>>Check showjob", showJob);
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
              {arrJob &&
                arrJob.length > 0 &&
                arrJob.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {isEmptyJob === true ? (
                        <span>
                          {index + 1} - {item.title} - {item.salary} ${" "}
                        </span>
                      ) : (
                        <>
                          {editJob1.id === item.id ? (
                            <span>
                              {index + 1} -
                              <input
                                value={editJob1.title}
                                onChange={(event) => this.edittileTodo(event)}
                              />
                              -
                              <input
                                value={editJob1.salary}
                                onChange={(event) => this.editsalTodo(event)}
                              />
                            </span>
                          ) : (
                            <span>
                              {index + 1} - {item.title} - {item.salary} ${" "}
                            </span>
                          )}
                        </>
                      )}

                      <button
                        className="edit"
                        onClick={() => this.handleEdit(item)}
                      >
                        {isEmptyJob === false && editJob1.id === item.id
                          ? "Save"
                          : "Edit"}
                      </button>
                      <button
                        onClick={() => {
                          this.handleDelete(item);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
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
