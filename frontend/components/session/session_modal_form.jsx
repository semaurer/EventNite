import React from 'react';
import { Link } from 'react-router';

class SessionModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          username: "",
          password: ""
      };
    this.redirect = this.redirect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateUserState(prop) {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  redirect(route) {
    this.props.router.push(route);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect(`/`));
  }

  handleClick() {

  }

  render () {
    const formType = this.props.formType;
    let formHeader = "Sign Up";
    let linkRoute = "/login";

    if (formType === "login") {
      formHeader = "Log In";
      linkRoute = "/signup";
    }

    const errors = [];
    this.props.errors.forEach(error => {
      errors.push(<li>{ error }</li>);
    });

    return (
      <div className="login-signup">
        <h2>{ formHeader }</h2>
        <ul>{errors}</ul>
        <form onSubmit={this.handleSubmit} className="login-signup-form">
          User Name: <input type="text"
                      value={this.state.username}
                      onChange={this.updateUserState("username")}>
                      </input>
          Password: <input type="text"
                      value={this.state.password}
                      onChange={this.updateUserState("password")}>
                      </input>

          <input type="submit" value="submit"></input>
        </form>
        <Link onClick={ this.handleClick }>{linkRoute.slice(1)}</Link>
      </div>
    );
  }

}

export default SessionModalForm;
