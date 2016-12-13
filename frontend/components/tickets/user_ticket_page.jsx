import React from 'react';

class UserTicketPage extends React.Component {
  constructor(props) {
    super(props);
    this.TicketsPerEventEls = this.TicketsPerEventEls.bind(this);
  }

  componentDidMount () {
    this.props.fetchTickets();
  }

  TicketsPerEventEls() {

  }

  render () {
    let TicketsPerEventEls = "";
    if (this.props.tickets) TicketsPerEventEls = this.TicketsPerEventEls();
    return (
      <div className="users-events">

      </div>
    );
  }
}

export default UserTicketPage;
