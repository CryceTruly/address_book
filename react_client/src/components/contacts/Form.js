import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addContact} from '../../actions/contacts'
import PropTypes from 'prop-types';


export class Form extends Component{
  state={
    fullname:'',
    phone:''
  }

  static propTypes={
    addContact:PropTypes.func.isRequired
  }

  onChange=e=>this.setState({[e.target.name]:e.target.value});
onSubmit=e=>{
  e.preventDefault();
  const {fullname,phone}=this.state;
  const contact={fullname,phone};
  this.props.addContact(contact)
  this.setState({
    fullname:'',
    phone:''
  });

};

  render(){

  const {fullname,phone} =this.state;
    return (
<div>

  <nav aria-label="breadcrumb">
    <br></br>
  <ol className="breadcrumb">
    <li className="breadcrumb-item active" aria-current="page">Add Contact</li>
  </ol>
</nav>


  <form onSubmit={this.onSubmit}>
    <div className="form-group">
      <label htmlFor="fullname">FullName</label>
      <input type="fullname" required  className="form-control" id="fullname" aria-describedby="fullnameHelp"
      name="fullname" onChange={this.onChange}  value={fullname}/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPhone">Phone Number</label>
      <input type="tel" required  name="phone" className="form-control" id="exampleInputPhone" onChange={this.onChange} value={phone}/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>


    )
  }
}
export default connect(null,{addContact})(Form);
