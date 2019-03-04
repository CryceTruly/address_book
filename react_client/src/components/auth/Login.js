import React, {
  Component
} from 'react';
import {
  Link,
  Redirect
} from 'react-router-dom';

import {
  connect
} from 'react-redux';
import PropTypes from 'prop-types';
import {
  loginUser
} from '../../actions/auth'
export class Login extends Component {

  state = {
    username: '',
    password: ''

  }
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state.username, this.state.password)

  }


  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to = "/" / >
    }


    const {
      username,
      password
    } = this.state;
    return ( <
      div >
      <
      form onSubmit = {
        this.onSubmit
      } >
      <
      fieldset >
      <
      div className = "form-group" >
      <
      label htmlFor = "username"
      className = "col-form-label" > Username < /label> <
      input type = "text"
      name = "username"
      onChange = {
        this.onChange
      }
      className = "form-control"
      id = "username"
      value = {
        username
      }
      placeholder = "Enter Username" / >

      <
      /div>


      <
      div className = "form-group" >
      <
      label htmlFor = "exampleInputPassword1" > Password < /label> <
      input type = "password"
      onChange = {
        this.onChange
      }
      className = "form-control"
      id = "exampleInputPassword1"
      name = "password"
      value = {
        password
      }
      placeholder = "Password" / >
      <
      /div>




      <
      button type = "submit"
      class = "btn btn-primary" > Login < /button>

      <
      p > Dont have an account ? < Link to = "/register" > Register < /Link></p >
      <
      /fieldset> <
      /form> <
      /div>
    )
  }

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {
  loginUser
})(Login);