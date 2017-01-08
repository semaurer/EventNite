import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../app/assets/stylesheets/modal_style';
import SessionModalForm from './session/session_modal_form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false,
      signIn: false, searchEntry: "" };

    this.loggedInEls = this.loggedInEls.bind(this);
    this.loggedOutEls = this.loggedOutEls.bind(this);
    this.createSearchEls = this.createSearchEls.bind(this);
    this.updateSearchState = this.updateSearchState.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.swapSignInState = this.swapSignInState.bind(this);
    this.redirect = this.redirect.bind(this);
    this.logOutRedirect = this.logOutRedirect.bind(this);
  }

  openModal(bool) {
    this.setState({ modalOpen: true,
      signIn: bool });
  }

  closeModal() {
    this.setState({ modalOpen: false });
    ModalStyle.content.top = "-300px";
    this.props.clearErrors();
  }

  onModalOpen () {
    ModalStyle.content.top = "95px";
  }

  swapSignInState () {
    if (this.state.signIn === false) {
      this.setState({ signIn: true });
    } else {
      this.setState({ signIn: false });
    }
    this.props.clearErrors();
  }

  redirect(e) {
    this.props.clearErrors();
    this.props.resetSearch();
    if (e.currentTarget.className === "header-nav-item-logo") {
      if (this.props.location.pathname !== "/") this.props.router.push("/");
    } else if (e.currentTarget.className === "header-nav-item brow") {
      if (this.props.location.pathname !== "/events") {
        this.props.router.push("events");
      }
    } else if (e.currentTarget.className === "prof-dropdown-b m") {
      this.props.router.push("/users/manage-events");
    } else if (e.currentTarget.className === "prof-dropdown-b t") {
      this.props.router.push("users/tickets");
    } else if (e.currentTarget.className === "prof-dropdown-b s") {
      this.props.router.push("users/saved-events");
    } else {
      this.props.router.push("events/new-event");
    }
  }

  logOutRedirect () {
    this.props.logOut();
    if (this.props.location.pathname !== "/") this.props.router.push("/");
  }

  updateSearchState(prop) {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  createSearchEls() {
    let searchEls;
    if (this.props.location.pathname !== "/") searchEls =
      <div>
        <img src={ window.magnifying_glass }></img>
        <input type="text" placeholder="Search for events"
          value={ this.state.searchEntry }
          onChange={ this.updateSearchState("searchEntry")}></input>
      </div>;
      return searchEls;
    }

  loggedInEls () {
    const searchEls = this.createSearchEls();
    return (
      <nav className='header-nav'>
        <h2 onClick={ this.redirect }
          className='header-nav-item-logo'>EventNite</h2>
        { searchEls }
        <ul className='header-items'>
          <li onClick={ this.redirect }
            className='header-nav-item brow'>Browse Events</li>
          <li className='header-nav-item user-name'>
            { this.props.currentUser.fname }
            <ul className="profile-dropdown">
              <li onClick={ this.redirect }className="prof-dropdown-b t">Tickets</li>
              <li onClick={ this.redirect } className="prof-dropdown-b s">Saved</li>
              <li onClick={ this.redirect } className="prof-dropdown-b m">Manage Events</li>
              <li className='prof-dropdown-b'
              onClick={ this.logOutRedirect }>Log Out</li>
            </ul>
          </li>
          <li onClick={ this.redirect }
            className='header-nav-item-c'>Create Event</li>
        </ul>
      </nav>
    );
  }

  loggedOutEls () {
    const searchEls = this.createSearchEls();
    return (
      <nav className='header-nav'>
        <h2 onClick={ this.redirect }
          className='header-nav-item-logo'>EventNite</h2>
        { searchEls }
        <ul className='header-items'>
          <li onClick={ this.redirect }
            className='header-nav-item brow'>Browse Events</li>
          <li onClick={ this.openModal.bind(this, false) }
            className='header-nav-item'>
            <div>Sign Up</div>
          </li>,
          <li onClick={ this.openModal.bind(this, true) }
            className='header-nav-item'>
            <div>Log In</div>
          </li>
          <li onClick={ this.openModal.bind(this, true) }
            className='header-nav-item-c'>Create Event</li>
        </ul>
      </nav>
    );
  }

  render () {
    let sessionItems;

    if (this.props.loggedIn) {
      sessionItems = this.loggedInEls();
    } else {
      sessionItems = this.loggedOutEls();
    }

    return (
      <header className='header-main group'>
        { sessionItems }
        <Modal onAfterOpen={ this.onModalOpen } style={ ModalStyle } contentLabel="" isOpen={ this.state.modalOpen }
            onRequestClose={ this.closeModal }>
          <SessionModalForm errors={ this.props.errors }
            logIn={ this.props.logIn } signUp={ this.props.signUp }
            formType={ this.state.signIn } router={ this.props.router }
            closeModal={ this.closeModal } swapSignInState={ this.swapSignInState }/>
        </Modal>
        {this.props.children}
      </header>
    );
  }
}

export default App;
