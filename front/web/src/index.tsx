import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import './index.css'
// import * as serviceWorker from "./serviceWorker";
import { StylesProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from "./state/store";

ReactDOM.render(
  // <React.StrictMode>

  <Provider store={store}>
    <StylesProvider injectFirst>
      <App />
      <ToastContainer />
    </StylesProvider>
  </Provider>,

  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
