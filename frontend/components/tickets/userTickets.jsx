import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class UserTicketPage extends React.Component {
  state = { loading: true };

  componentDidMount () {
    this.props.fetchTickets()
      .then(() => this.setState({ loading: false }));
  }

  redirect = () => {
    const { location, router } = this.props;
    location.pathname === "/users/tickets" ? router.push("/users/saved-events") : router.push("/users/tickets");
  }

  renderTickets = () => {
    const { tickets } = this.props;

    return tickets.map((condensedTicket, _idx) => {
      const ticketText = condensedTicket.ticketCount > 1 ? "tickets" : 'ticket';
      return (
        <span key={ _idx } className="ticket">
          <Link to={ `events/${condensedTicket.tickets[0].event_id}`}>
            <div className="ticket-left">
              <img src={ condensedTicket.tickets[0].event_image_url} />
            </div>
          </Link>
          <div className="ticket-right">
            <li className="start-date">
              { condensedTicket.tickets[0].event_start_date } -{ ' ' }
              { condensedTicket.tickets[0].event_start_time}
            </li>
            <li className="ticket-p-title">
              { condensedTicket.tickets[0].event_title }
            </li>
            <li className="ticket-purchase">
              Order of { condensedTicket.ticketCount } {ticketText} on
              { ' ' }{ condensedTicket.tickets[0].formatted_date }
            </li>
          </div>
        </span>
      );
    });
  }

  render () {
    const { currentUser, location } = this.props;
    const isTicketsView = location.pathname.includes('tickets');

    return (
      <div className="users-events group">
        <header>
        <h2>{ currentUser ? `${currentUser.fname} ${currentUser.lname}` : '' }</h2>
        <ul className="u-e-header group">
          <li
            className={classNames('u-e-tab', {"u-e-tab-active": isTicketsView})}
            onClick={isTicketsView ? null : this.redirect}
          >
            Your Events
          </li>
          <li
            className={classNames("u-e-tab", {'u-e-tab-active': !isTicketsView})}
            onClick={!isTicketsView ? null : this.redirect }
          >
            Saved Events
          </li>
        </ul>
      </header>
        <span className="user-events-bottom group">
          <main>
            <ul className="each-ticket">
              { this.state.loading ? <div className="loader" /> : null }
              { this.renderTickets() }
            </ul>
          </main>
        </span>
      </div>
    );
  }
}

export default UserTicketPage;
