import React, { Component, Fragment } from "react";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "./contacts/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";

import store from "../Store";
// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
