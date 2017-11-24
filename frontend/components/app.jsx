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

  componentWillReceiveProps (nextProps) {
    const nextPath = nextProps.curPath;
    const { curPath } = this.props;

    if (curPath !== nextPath) this.resetAppState();
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

  resetAppState = () => {
    this.props.clearErrors();
    this.props.clearEvent();
    this.props.clearEvents();
    this.props.resetSearch();
    this.setState({ searchEntry: '' })
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
    return this.props.location.pathname == "/" ? null : (
        <div>
          <img src={ window.magnifying_glass } />
          <input
            placeholder="Search for events"
            value={ this.state.searchEntry }
            onChange={ this.updateSearchState("searchEntry") }
            onKeyUp={ this.search } />
        </div>
      );
    }

  renderLoggedInEls = () => {
    return (
      <ul>
        <li className='header-nav-item user-name'>
          { this.props.currentUser.fname }
          <ul className="nav-dropdown">
            <Link to={`/users/tickets`} className="nav-dropdown-item">Tickets</Link>
            <Link to={`/users/saved-events`} className="nav-dropdown-item">Saved</Link>
            <Link to={`/users/manage-events`} className="nav-dropdown-item">Manage Events</Link>
            <li className="nav-dropdown-item" onClick={ this.logOutRedirect }>Log Out</li>
          </ul>
        </li>
        <Link to="/events/new-event" className='header-nav-item create'>Create Event</Link>
      </ul>
    );
  }

  renderLoggedOutEls = () => {
    return (
      <ul>
        <li onClick={ this.openModal.bind(this, false) } className='header-nav-item'>Sign Up</li>
        <li onClick={ this.openModal.bind(this, true) } className='header-nav-item'>Log In</li>
        <li onClick={ this.openModal.bind(this, true) } className='header-nav-item create'>Create Event</li>
      </ul>
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
      <header>
        <nav className="header-nav">
          <Link to="/" className='header-nav-item logo'>EventNite</Link>
          { this.renderSearchEls() }
          <ul className='header-items'>
            <Link to="/events" className="header-nav-item">Browse Events</Link>
            { loggedIn ? this.renderLoggedInEls() : this.renderLoggedOutEls() }
          </ul>
        </nav>
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
