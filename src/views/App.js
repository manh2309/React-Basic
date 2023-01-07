import React from "react";
import logo from "./logo.svg";
import MyComponent from "./Example/MyComponents";
import "./App.scss";

/**
 * 2 components: class components / function components (function, arrow function)
 * return ra 1 khối html
 * JSX trả về 1 khối html nằm trong return
 */
function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with ReactJS</p>
        <MyComponent />
        {/* <MyComponent></MyComponent> muốn gọi con trong component */}
      </header>
    </div>
  );
}

export default App;
