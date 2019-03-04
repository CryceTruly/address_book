import React, {
    Component
} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'



export class Header extends Component {
static propTypes={
  auth:PropTypes.object.isRequired,
logout:PropTypes.func.isRequired}


    render() {
      const {isAuthenticated,user} =this.props.auth;
      const authLinks=(
        <ul className="navbar-nav ml-auto">
<li className="nav-item"><a href="">{ user?`Welcome ${user.username}`:''}</a></li>
          <li className="nav-item">
            <button onClick={this.props.logout} className="btn btn-info btn-sm">Logout</button>
          </li>
</ul>

      )

      const guestLinks=(
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link">
      <Link to="/register">Register</Link>
      </a></li>
      <li className="nav-item">
      <a className="nav-link">
      <Link to="/login">Login</Link>
      </a>              </li>

      </ul>

      )


        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary ">
          <a className="navbar-brand" href="#">AddressBook</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01" >

{isAuthenticated?authLinks:guestLinks}

          </div>
        </nav>
        )
    }

}

const mapStateToProps=state=>({
  auth:state.auth
})
export default connect(mapStateToProps,{logout})(Header);
