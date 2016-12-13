import React from 'react';
import { Link } from 'react-router';

class UserTicketPage extends React.Component {
  constructor(props) {
    super(props);
    this.TicketsPerEventEls = this.TicketsPerEventEls.bind(this);
    this.tabEls = this.tabEls.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount () {
    this.props.fetchTickets();
  }

  redirect () {
    if (this.props.location.pathname === "/users/tickets") {

    } else {
      this.props.router.push("/users/tickets");
    }
  }

  TicketsPerEventEls() {
    return this.props.tickets.map((condensedTicket, _idx) => {
      let ticketText = "ticket";
      let spacing = " ";
      if (condensedTicket.ticketCount > 1) ticketText = "tickets";
      return (
        <span key={ _idx } className="ticket">
          <Link to={ `events/${condensedTicket.tickets[0].event_id}`}>
            <div className="ticket-left">
              <img src={ condensedTicket.tickets[0].event_image_url}></img>
            </div>
          </Link>
          <div className="ticket-right">
            <li className="start-date">
              { condensedTicket.tickets[0].event_start_date } -{ spacing }
              { condensedTicket.tickets[0].event_start_time}</li>
            <li className="ticket-p-title">
              { condensedTicket.tickets[0].event_title }</li>
            <li className="ticket-purchase">
              Order of { condensedTicket.ticketCount } {ticketText} on
              { spacing }{ condensedTicket.tickets[0].formatted_date }</li>
          </div>
        </span>
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
              <li>Your Events</li>
              <li></li>
            </ul>
          </li>
          <li onClick={ this.redirect } className="u-e-tab-active">
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
    let TicketsPerEventEls = "";
    if (this.props.tickets) TicketsPerEventEls = this.TicketsPerEventEls();
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
        <span className="user-events-bottom group">
          <main>
            <ul className="each-ticket">
              { TicketsPerEventEls }
            </ul>
          </main>
        </span>
      </div>
    );
  }
}

export default UserTicketPage;
