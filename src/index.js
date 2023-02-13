import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import { Provider } from "react-redux"; // ép react khởi động song song vs redux
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";

const reduxStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // tạo biến nạp dữ liệu
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
