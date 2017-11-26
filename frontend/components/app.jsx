import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../app/assets/stylesheets/sessionModalStyling';
import SessionModalContainer from './session/sessionModalContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      searchEntry: ""
    };
  }

  componentWillReceiveProps (nextProps) {
    const nextPath = nextProps.curPath;
    const { curPath } = this.props;

    if (curPath !== nextPath) this.resetAppState();
  }

  resetAppState = () => {
    const { clearErrors, clearEvent, clearEvents, resetSearch } = this.props;

    clearErrors();
    clearEvent();
    clearEvents();
    resetSearch();
    this.setState({ searchEntry: '' })
  }

  openSignUp = () => {
    this.props.swapModalDisplay(true);
    this.openModal();
  }

  openLogIn = () => {
    this.props.swapModalDisplay(false);
    this.openModal();
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
    ModalStyle.content.top = "-300px";
    this.props.clearErrors();
  }

  onModalOpen () {
    ModalStyle.content.top = "95px";
  }

  logOutRedirect = () => {
    const { curPath, logOut, router } = this.props;

    logOut();
    if (curPath !== "/") router.push("/");
  }

  updateSearchState = () => {
    this.setState({ searchEntry: this.searchInput.value })
  }

  search = (e) => {
    const { curPath, receiveSearch, router } = this.props;

    if (e.keyCode === 13) {
      if (curPath !== "/events") {
        router.push("events");
      }
      receiveSearch(this.state.searchEntry);
    }
  }

  setSearchRef = (ref) => {
    this.searchInput = ref;
  }

  renderSearchEls = () => {
    const { curPath } = this.props;

    return curPath === "/" ? null : (
        <div>
          <img src={ window.magnifying_glass } />
          <input
            placeholder="Search for events"
            value={ this.state.searchEntry }
            onChange={ this.updateSearchState }
            onKeyUp={ this.search }
            ref={ this.setSearchRef }
          />
        </div>
      );
    }

  renderLoggedInEls = () => {
    return (
      <ul>
        <li className='header-nav-item'>
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
        <li onClick={ this.openSignUp } className='header-nav-item'>Sign Up</li>
        <li onClick={ this.openLogIn } className='header-nav-item'>Log In</li>
        <li onClick={ this.openModal } className='header-nav-item create'>Create Event</li>
      </ul>
    );
  }

  render () {
    const { children, currentUser } = this.props;

    return (
      <header>
        <nav className="header-nav">
          <Link to="/" className='header-nav-item logo'>EventNite</Link>
          { this.renderSearchEls() }
          <ul className='header-items'>
            <Link to="/events" className="header-nav-item">Browse Events</Link>
            { currentUser ? this.renderLoggedInEls() : this.renderLoggedOutEls() }
          </ul>
        </nav>
        <Modal
          contentLabel=""
          isOpen={ this.state.modalOpen }
          onAfterOpen={ this.onModalOpen }
          onRequestClose={ this.closeModal }
          style={ ModalStyle }
        >
          <SessionModalContainer closeModal={ this.closeModal } />
        </Modal>
        {children}
      </header>
    );
  }
}

export default App;
