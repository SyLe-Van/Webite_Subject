// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import * as React from "react";
import *as ReactDOM from "react-dom";
import { Component } from "react";
import './index.css';

class UserForm extends Component {
  render() {
    return (
      <form>
        <label>Enter a username:</label>
        <input />
      </form>
    );
  }
}

ReactDOM.render(<UserForm />, document.querySelector("#root"));
