import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../app/assets/stylesheets/modal_style';
import SessionModalForm from './session/session_modal_form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false,
      signIn: false }

    this.loggedInEls = this.loggedInEls.bind(this);
    this.loggedOutEls = this.loggedOutEls.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.swapSignInState = this.swapSignInState.bind(this);
  }

  openModal(bool) {
    this.setState({ modalOpen: true,
      signIn: bool })
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  swapSignInState () {
    if (this.state.signIn === false) {
      this.setState({ signIn: true })
    } else {
      this.setState({ signIn: false })
    }
  }

  loggedInEls () {
    return (
      [
        <li key="312" className='header-nav-item'>
          { this.props.currentUser.fname }</li>,
        <dropdown key="310" className="profile-dropdown">
          <li key="313" className="prof-dropdown-b">Tickets 0</li>
          <li key="314" className="prof-dropdown-b">Saved 0</li>
          <li key="315" className="prof-dropdown-b">Managed Events</li>
          <li key="316" className='header-nav-item'
          onClick={ this.props.logOut }>Log Out</li>
        </dropdown>
      ]
    )
  }

  loggedOutEls () {
    return (
      [
        <li onClick={ this.openModal.bind(this, false) }
          key="321" className='header-nav-item'>
          <div key="323">Sign Up</div>
        </li>,
        <li onClick={ this.openModal.bind(this, true) }
          key="322" className='header-nav-item'>
          <div key="324">Log In</div>
        </li>
      ]
    )
  }

  render () {
    let sessionItems;

    if (this.props.loggedIn) {
      sessionItems = this.loggedInEls();
    } else {
      sessionItems = this.loggedOutEls();
    }

    return (
      <section className='homepage-container group'>
        <header className='header-main'>
          <nav className='header-nav'>
            <h2 className='header-nav-item-logo'>EventNite</h2>
            <ul className='header-items'>
              <li className='header-nav-item'>Browse Events</li>
              { sessionItems }
              <li className='header-nav-item-c'>Create Event</li>
            </ul>
          </nav>
        </header>

        <Modal style={ ModalStyle } contentLabel="" isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }>
          <button className="auth-modal-b" onClick={ this.closeModal }>X</button>
          <SessionModalForm errors={ this.props.errors }
            logIn={ this.props.logIn } signUp={ this.props.signUp }
            formType={ this.state.signIn } router={ this.props.router }
            closeModal={ this.closeModal } swapSignInState={ this.swapSignInState }/>
        </Modal>


        {this.props.children}
      </section>
    );
  }
}

export default App;
