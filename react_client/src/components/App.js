import React, { Component, Fragment } from "react";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "./contacts/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Contacts from './contacts/Contacts'
import { Provider } from "react-redux";
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute'
import {loadUser} from '../actions/auth';

import store from "../Store";
// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
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
<switch>
<PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
  <Route exact path="/register" component={Register}></Route>
    <Route exact path="/login" component={Login}></Route>




</switch>

    </div>
  </Fragment>

</Router>

        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
