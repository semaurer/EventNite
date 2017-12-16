import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

class SessionModalForm extends Component {
  state = {
    email: "",
    password: "",
    fname: "",
    lname: ""
  }

  updateUserState = (prop) => {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  guestDemoEntry = () => {
    const { closeModal, logIn } = this.props;
    logIn({ email: "bob@gmail.com", password: "apples" });
    closeModal();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { closeModal, displayingSignUpForm, logIn, signUp } = this.props;

    const processFormSubmittal = displayingSignUpForm ? signUp : logIn
    processFormSubmittal(this.state).then(() => closeModal());
  }

  swapToLogIn = () => {
    const { clearErrors, swapModalDisplay } = this.props;
    swapModalDisplay(false);
    clearErrors();
  }

  swapToSignUp = () => {
    const { clearErrors, swapModalDisplay } = this.props;
    swapModalDisplay(true);
    clearErrors();
  }

  signUpFormEls = () => {
    return (
      <div className="modal-form">
        <h2 className="modal-header">Sign Up</h2>
        <div className='link-container'>
          Already signed up?<a onClick={ this.swapToLogIn }>Log In</a>
        </div>
        <input
          value={this.state.email}
          onChange={this.updateUserState("email")}
          placeholder="Email"
        />
        <input
          value={this.state.fname}
          onChange={this.updateUserState("fname")}
          placeholder="First Name"
        />
        <input
          value={this.state.lname}
          onChange={this.updateUserState("lname")}
          placeholder="Last Name"
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.updateUserState("password")}
          placeholder="Password"
        />
      </div>
    );
  }

  logInFormEls = () => {
    return (
      <div className="modal-form">
        <h2 className="modal-header">Log In</h2>
        <div className="link-container">
          Don't have an account?<a onClick={ this.swapToSignUp }>Sign Up</a>
        </div>
        <input
          value={this.state.email}
          onChange={this.updateUserState("email")}
          placeholder="Email"
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.updateUserState("password")}
          placeholder="Password"
        />
        <span className="welcome-message">Welcome Back!</span>
      </div>
    );
  }

  render () {
    const { closeModal, displayingSignUpForm, errors } = this.props;

    let errorsWrapper = [];
    if (errors) {
      errors.forEach((error, idx) => {
        errorsWrapper.push(<li key={idx}>{error}</li>);
      });
    }

    return (
      <div className="login-signup">
        { displayingSignUpForm ? this.signUpFormEls() : this.logInFormEls() }
        <button className={classNames('modal-button', {'spacing': !displayingSignUpForm})} onClick={ this.handleSubmit }>Submit</button>
        <button className="modal-button" onClick={ this.guestDemoEntry }>Guest Demo</button>
        <ul onClick={closeModal} className="errors">{errorsWrapper}</ul>
      </div>
    );
  }

}

export default SessionModalForm;
