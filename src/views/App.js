import React from "react";
import logo from "./logo.svg";
import MyComponent from "./Example/MyComponents";
import ListTodo from "./Todos/ListTodos";
import Nav from "./Example/Nav/Nav";
import Home from "./Example/Home";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Home />
          {/* <MyComponent /> */}
          {/* <MyComponent></MyComponent> muốn gọi con trong component */}

          {/* <ListTodo /> */}
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
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
