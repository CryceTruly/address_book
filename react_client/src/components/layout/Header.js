import React, {
    Component
} from 'react';
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary ">
          <a className="navbar-brand" href="#">AddressBook</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container" id="navbarColor01" >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link">
<Link to="/register">Register</Link>
</a></li>
<li className="nav-item">
  <a className="nav-link">
    <Link to="/login">Login</Link>
</a>              </li>
<li className="nav-item">
<a className="nav-link" href="#">Logout</a>
              </li>
            </ul>

          </div>
        </nav>
        )
    }

}
export default Header;
