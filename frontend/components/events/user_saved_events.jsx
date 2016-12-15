import React from 'react';

class UserSavedEvents extends React.Component {
  constructor(props) {
    super(props);
    this.tabEls = this.tabEls.bind(this);
    this.savedEventEls = this.savedEventEls.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    this.props.fetchSavedEvents();
  }

  redirect () {
    if (this.props.location.pathname === "/users/tickets") {
      this.props.router.push("/users/saved-events");
    } else {
      this.props.router.push("/users/tickets");
    }
  }

  savedEventEls() {
    return this.props.events.map(event => {

      return (
        <div key={ event.id} className="each-saved-event">

        </div>
      );
    });
  }

  tabEls () {
    if (this.props.location.pathname === "/users/tickets") {
      return (
        <div>
          <li className="u-e-tab-active">
            <ul>
              <li>Your Events</li>
              <li></li>
            </ul>
          </li>
          <li onClick={ this.redirect } className="u-e-tab">
            <ul>
              <li>Saved Events</li>
            </ul>
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li className="u-e-tab">
            <ul>
              <li onClick={ this.redirect }>Your Events</li>
              <li></li>
            </ul>
          </li>
          <li className="u-e-tab-active">
            <ul>
              <li>Saved Events</li>
            </ul>
          </li>
        </div>
      );
    }
  }

  render () {
    let tabEls = this.tabEls();
    let userName = "";
    let savedEventEls = "";
    if (this.props.events) savedEventEls = this.savedEventEls();
    if (this.props.currentUser) userName =
      `${this.props.currentUser.fname} ${this.props.currentUser.lname}`;

    return (
      <div className="users-events group">
        <header>
          <h2>{ userName }</h2>
          <ul className="u-e-header group">
            { tabEls }
          </ul>
        </header>
        <span className="user-saved-events">
          <main>
            { savedEventEls }
          </main>
        </span>
      </div>
    );
  }
}

export default UserSavedEvents;
