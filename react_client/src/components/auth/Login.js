import React,{Component} from 'react';
import {Link} from 'react-router-dom';



export class Login extends Component{

state={
  username:'',
  password:''

}
onSubmit=e=>{
  e.preventDefault();
  console.log('submit');

}


onChange=e=>{
  this.setState({[e.target.name]:e.target.value});
}
render(){
  const {username,password}=this.state;
  return (
    <div>
    <form onSubmit={this.onSubmit}>
  <fieldset>
    <div className="form-group">
          <label htmlFor="username" className="col-form-label">Username</label>
          <input type="text" name="username" onChange={this.onChange} className="form-control"
           id="username"  value={username} placeholder="Enter Username"/>

        </div>


    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" onChange={this.onChange} className="form-control"
        id="exampleInputPassword1" name="password" value={password} placeholder="Password"/>
    </div>




    <button type="submit" class="btn btn-primary">Login</button>

    <p>Dont have an account?<Link to="/register">Register</Link></p>
  </fieldset>
</form>
    </div>
  )
}

}

export default Login;
