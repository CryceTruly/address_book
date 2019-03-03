import React, {
  Component,Fragment
} from 'react';
import {
  connect
} from 'react-redux';
import PropTypes from 'prop-types';
import {
  getContacts,deleteContact,addContact
} from '../../actions/contacts'

export class Contacts extends Component {

static propTypes={
  contacts:PropTypes.array.isRequired
}

componentDidMount(){
  this.props.getContacts();

}
  render() {
    return (
      <Fragment>
            <h2>Contacts</h2>
            <table className="table table-stripped">
            <thead>
            <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th></th>
            </tr>
            </thead>

            <tbody>
            {
              this.props.contacts.map(contact=>(
                <tr key={contact.id}>
            <td>{contact.fullname}</td>
                <td>{contact.phone}</td>
            <td><button className="btn btn-sm btn-warning" onClick={this.props.deleteContact.bind(this,contact.id)}>Delete</button></td>
                </tr>
              ))
            }

            </tbody>


            </table>

      </Fragment>

    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts
})

export default connect(mapStateToProps,{getContacts,deleteContact})(Contacts);
