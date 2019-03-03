import React, {
  Component,
  Fragment
} from 'react';
import Header from './layout/Header'
import DashBoard from './contacts/Dashboard'
import Contacts from './contacts/Contacts'
import {
  Provider
} from 'react-redux';
import store from '../Store';

class App extends Component {
  render() {
    return ( <
      Provider store = {
        store
      } >


      <
      Fragment>
      <
      div className = "App container" >
      <
      Header / >
      <
      DashBoard / >
      <
      /div > < /
      Fragment >


      <
      /Provider>

    );
  }
}

export default App;
