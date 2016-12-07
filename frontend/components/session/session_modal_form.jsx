import React from 'react';
import { Link } from 'react-router';

class SessionModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          email: "",
          password: "",
          fname: "",
          lname: ""
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
    this.signUpFormEls = this.signUpFormEls.bind(this);
    this.logInFormEls = this.logInFormEls.bind(this);
    this.guestDemoEntry = this.guestDemoEntry.bind(this);
  }

  updateUserState(prop) {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  guestDemoEntry () {
    this.props.logIn( { email: "bob@gmail.com", password: "apples" } );
    this.props.closeModal();
  }

  handleSubmit(e) {
    let processForm = this.props.signUp;
    if (this.props.formType === true) processForm = this.props.logIn;
    e.preventDefault();
    const user = Object.assign({}, this.state);
    processForm(user).then(() => this.props.closeModal());
  }

  signUpFormEls () {
    const formHeader = "Sign Up";
    const linkRoute = "/login";

    return (
      <div className="sign-up-form">
        <h2 className="modal-header">{ formHeader }</h2>
        <form onSubmit={this.handleSubmit} className="auth-modal-form">
        <Link className="swap-form-link" onClick={ this.props.swapSignInState }>
          {linkRoute.slice(1)}</Link>
        Email: <input className="auth-form-item" type="text"
                      value={this.state.email}
                      onChange={this.updateUserState("email")}>
                      </input>
          First Name: <input className="auth-form-item" type="text"
                      value={this.state.fname}
                      onChange={this.updateUserState("fname")}>
                      </input>
          Last Name: <input className="auth-form-item" type="text"
                      value={this.state.lname}
                      onChange={this.updateUserState("lname")}>
                      </input>
          Password: <input className="auth-form-item" type="text"
                      value={this.state.password}
                      onChange={this.updateUserState("password")}>
                      </input>

          <input className="auth-form-button" type="submit" value="submit"></input>
        </form>
        <button className="auth-modal-guest-b" onClick={ this.guestDemoEntry }
          >Guest Demo Sign Up</button>
      </div>

    );
  }

  logInFormEls () {
    const formHeader = "Log In";
    const linkRoute = "/signup";

    return (
      <div className="log-in-form">
        <h2 className="modal-header">{ formHeader }</h2>
        <Link className="swap-form-link" onClick={ this.props.swapSignInState }>
          {linkRoute.slice(1)}</Link>
        <form onSubmit={this.handleSubmit} className="auth-modal-form">
          Email: <input className="auth-form-item" type="text"
                      value={this.state.email}
                      onChange={this.updateUserState("email")}>
                      </input>
          Password: <input className="auth-form-item" type="text"
                      value={this.state.password}
                      onChange={this.updateUserState("password")}>
                      </input>

          <input className="auth-form-button" type="submit" value="submit"></input>
        </form>
        <button className="auth-modal-guest-b" onClick={ this.guestDemoEntry }
          >Guest Demo Log In</button>
      </div>

    );
  }

  render () {
    const formType = this.props.formType;
    let renderedForm = this.signUpFormEls();
    if (formType === true) renderedForm = this.logInFormEls();

    const errors = [];
    this.props.errors.forEach(error => {
      errors.push(<li>{ error }</li>);
    });

    return (
      <div className="login-signup">
        <ul>{errors}</ul>
        { renderedForm }
      </div>
    );
  }

}

export default SessionModalForm;
