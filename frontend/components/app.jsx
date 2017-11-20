import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../app/assets/stylesheets/modal_style';
import SessionModalForm from './session/session_modal_form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      signIn: false,
      searchEntry: ""
    };
  }

  openModal = (bool) => {
    this.setState({ modalOpen: true, signIn: bool });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
    ModalStyle.content.top = "-300px";
    this.props.clearErrors();
  }

  onModalOpen () {
    ModalStyle.content.top = "95px";
  }

  swapSignInState = () => {
    this.state.signIn === false ? this.setState({ signIn: true }) : this.setState({ signIn: false });
    this.props.clearErrors();
  }

  redirect = (e) => {
    this.props.clearErrors();
    this.props.clearEvent();
    this.props.clearEvents();
    this.props.resetSearch();
    this.state.searchEntry = "";
    if (e.currentTarget.className === "header-nav-item-logo") {
      if (this.props.location.pathname !== "/") {
        this.props.router.push("/");
      }
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

  logOutRedirect = () => {
    this.props.logOut();
    if (this.props.location.pathname !== "/") this.props.router.push("/");
  }

  updateSearchState = (prop) => {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  search = (e) => {
    if (e.keyCode === 13) {
      if (this.props.location.pathname !== "/events") {
        this.props.router.push("events");
      }
      this.props.receiveSearch(this.state.searchEntry);
    }
  }

  renderSearchEls = () => {
    let searchEls;
    if (this.props.location.pathname !== "/") searchEls =
      <div>
        <img src={ window.magnifying_glass }></img>
        <input type="text" placeholder="Search for events"
          value={ this.state.searchEntry }
          onChange={ this.updateSearchState("searchEntry") }
          onKeyUp={ this.search }></input>
      </div>;
      return searchEls;
    }

  renderLoggedInEls = () => {
    return (
      <nav className='header-nav'>
        <h2 onClick={ this.redirect }
          className='header-nav-item-logo'>EventNite</h2>
        { this.renderSearchEls() }
        <ul className='header-items'>
          <li onClick={ this.redirect }
            className='header-nav-item brow'>Browse Events</li>
          <li className='header-nav-item user-name'>
            { this.props.currentUser.fname }
            <ul className="profile-dropdown">
              <li onClick={ this.redirect } className="prof-dropdown-b t">Tickets</li>
              <li onClick={ this.redirect } className="prof-dropdown-b s">Saved</li>
              <li onClick={ this.redirect } className="prof-dropdown-b m">Manage Events</li>
              <li className='prof-dropdown-b' onClick={ this.logOutRedirect }>Log Out</li>
            </ul>
          </li>
          <li onClick={ this.redirect }
            className='header-nav-item-c'>Create Event</li>
        </ul>
      </nav>
    );
  }

  renderLoggedOutEls = () => {
    return (
      <nav className='header-nav'>
        <h2 onClick={ this.redirect }
          className='header-nav-item-logo'>EventNite</h2>
        { this.renderSearchEls() }
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
    const {
      children,
      errors,
      logIn,
      loggedIn,
      router,
      signIn,
      signUp
    } = this.props;

    return (
      <header className='header-main group'>
        { loggedIn ? this.renderLoggedInEls() : this.renderLoggedOutEls() }
        <Modal
          contentLabel=""
          isOpen={ this.state.modalOpen }
          onAfterOpen={ this.onModalOpen }
          onRequestClose={ this.closeModal }
          style={ ModalStyle }
        >
          <SessionModalForm
            closeModal={ this.closeModal }
            errors={ errors }
            formType={ this.state.signIn }
            logIn={ logIn }
            router={ router }
            signUp={ signUp }
            swapSignInState={ this.swapSignInState }
          />
        </Modal>
        {children}
      </header>
    );
  }
}

export default App;
