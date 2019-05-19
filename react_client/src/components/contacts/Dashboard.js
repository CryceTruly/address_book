import React, { Component, Fragment } from "react";
import Form from "./Form";
import Contacts from "./Contacts";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export class DashBoard extends Component {
  componentDidMount() {
    console.log("mount");
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <Fragment>
          <Form />
          <Contacts />
        </Fragment>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  null
)(DashBoard);
