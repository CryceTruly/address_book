import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export class Register extends Component{


state={
  email:'',
  username:'',
  password:'',
  password_comfirm:''

}
onSubmit=e=>{
  e.preventDefault();
  console.log('submit');

}
  onChange=e=>this.setState({[e.target.name]:e.target.value});

render(){
  const {email,username,password,password_comfirm}=this.state;
  return (
    <div>
    <h2>Register</h2>
    <form onSubmit={this.onSubmit}>
  <fieldset>

    <div className="form-group">
      <label htmlFor="username" className="col-form-label">Username</label>
      <input type="text" name="username" onChange={this.onChange} className="form-control"
       id="username"  value={username} placeholder="Enter Username"/>

    </div>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input type="email" name="email" onChange={this.onChange} className="form-control"
       id="email" aria-describedby="emailHelp" value={email} placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" onChange={this.onChange} className="form-control"
      id="exampleInputPassword1" name="password" value={password} placeholder="Password"/>
    </div>

    <div className="form-group">
      <label htmlFor="exampleInputPassword2">Comfirm Password</label>
      <input type="password" onChange={this.onChange} className="form-control"
      id="exampleInputPassword2" name="password_comfirm" value={password_comfirm} placeholder="Password"/>
    </div>




    <button type="submit" class="btn btn-primary">Register</button>

    <p>Already have an account?<Link to="/login">Login</Link></p>
  </fieldset>
</form>
    </div>
  )
}

}

export default Register;
