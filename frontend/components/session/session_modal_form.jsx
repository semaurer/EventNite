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

    return (
      <div className="sign-up-form group">
        <h2 className="modal-header">{ formHeader }</h2>
        <div className='link-container'>
          Already signed up? <Link className="swap-form-link"
          onClick={ this.props.swapSignInState }>
            Log In</Link>
        </div>
        <form onSubmit={this.handleSubmit} className="auth-modal-form">
          <input className="auth-form-item" type="text"
              value={this.state.email}
              onChange={this.updateUserState("email")}
              placeholder="Email">
              </input>
            <input className="auth-form-item" type="text"
              value={this.state.fname}
              onChange={this.updateUserState("fname")}
              placeholder="First Name">
              </input>
            <input className="auth-form-item" type="text"
              value={this.state.lname}
              onChange={this.updateUserState("lname")}
              placeholder="Last Name">
              </input>
           <input className="auth-form-item" type="password"
              value={this.state.password}
              onChange={this.updateUserState("password")}
              placeholder="Password">
              </input>
          <input className="auth-form-button" type="submit" value="Submit"></input>
        </form>
        <button className="auth-form-button" onClick={ this.guestDemoEntry }
          >Guest Demo</button>
      </div>

    );
  }

  logInFormEls () {
    const formHeader = "Log In";

    return (
      <div className="log-in-form group">
        <h2 className="modal-header">{ formHeader }</h2>
        <div className="link-container">
          Don't have an account? <Link className="swap-form-link"
          onClick={ this.props.swapSignInState }>
          Sign Up</Link>
        </div>
        <form onSubmit={this.handleSubmit} className="auth-modal-form">
          <input className="auth-form-item" type="text"
            value={this.state.email}
            onChange={this.updateUserState("email")}
            placeholder="Email">
          </input>
          <input className="auth-form-item" type="password"
            value={this.state.password}
            onChange={this.updateUserState("password")}
            placeholder="Password">
            </input>
          <input className="auth-form-button l" type="submit" value="Submit"></input>
        </form>
        <button className="auth-form-button" onClick={ this.guestDemoEntry }
          >Guest Demo</button>
        <span className="log-in-fill">Welcome Back!</span>
      </div>

    );
  }

  render () {
    const formType = this.props.formType;
    let renderedForm = this.signUpFormEls();
    if (formType === true) renderedForm = this.logInFormEls();
    const errors = [];
    this.props.errors.forEach((error, _idx) => {
      errors.push(<li key={ _idx }>{ error }</li>);
    });

    return (
      <div className="login-signup">
        { renderedForm }
        <ul onClick={this.props.closeModal} className="errors">{errors}</ul>
      </div>
    );
  }

}

export default SessionModalForm;
