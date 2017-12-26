import React from 'react';

class TicketModal extends React.Component {
  state = { ticketQuantity: 0, totalCost: 0 };

  updateTickets = (e) => {
    const { price } = this.props;
    this.setState({ ticketQuantity: e.currentTarget.value });

    if (price !== "free") {
      let currentPrice = String((parseInt(e.currentTarget.value) * parseInt(price.slice(1))));
      this.setState({ totalCost: currentPrice });
    }
  }

  handleSubmit = () => {
    const { createTicket, eventId, router } = this.props;

    for (let i = 0; i < this.state.ticketQuantity; i++) {
      createTicket({ event_id: eventId  })
        .then(() => {
          if (i === this.state.ticketQuantity - 1) router.push("/users/tickets");
        });
    }
  }

  render () {
    const { endDate, price, ticketText } = this.props;
    const { totalCost, ticketQuantity } = this.state;
    const isFree = price === 'free';

    return (
      <div className="ticket-modal group">
        <header>
          <h2>{ isFree ? ticketText : `Select ${ticketText}` }</h2>
        </header>
        <main>
          <ul className="ticket-options">
            <li className="ticket-option">
              <span className="t-o-top-bar">
                <div>
                  <h3>General Admission</h3>
                  <h4>{ isFree ? "Free" : price }</h4>
                </div>
                <div>
                  <select onChange={ this.updateTickets }className="ticket-quantity">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </span>
              <span className="t-o-bot-bar">
                <article>Sales end on { endDate }</article>
              </span>
            </li>
          </ul>
        </main>
        <footer>
          <article>QTY: { ticketQuantity }</article>
          <article className="total-price">${ isFree ? '0' : totalCost }</article>
          <div className="footer-button-div">
            <button onClick={ this.handleSubmit }>PLACE ORDER</button>
          </div>
        </footer>
      </div>
    );
  }
}

export default TicketModal;
