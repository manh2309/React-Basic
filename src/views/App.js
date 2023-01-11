import React from "react";
import logo from "./logo.svg";
import MyComponent from "./Example/MyComponents";
import ListTodo from "./Todos/ListTodos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

/**
 * 2 components: class components / function components (function, arrow function): dung vs hook
 * return ra 1 khối html
 * JSX trả về 1 khối html nằm trong return
 */
function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TodosApp with ReactJS</p>
        {/* <MyComponent /> */}
        {/* <MyComponent></MyComponent> muốn gọi con trong component */}
        <ListTodo />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
