import React from 'react';

class TicketModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticketQuantity: 0, totalCost: 0 };
    this.updateTickets = this.updateTickets.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTickets(e) {
    this.setState({ ticketQuantity: e.currentTarget.value });
    if (this.props.price !== "free") {
      let currentPrice = String((parseInt(e.currentTarget.value) *
        parseInt(this.props.price.slice(1))));
      this.setState({ totalCost: currentPrice });
    }
  }

  handleSubmit() {
    for (var i = 0; i < this.state.ticketQuantity; i++) {
      this.props.createTicket({ event_id: this.props.eventId  });
    }
  }

  render () {
    let priceText = "Free";
    let ticketText = this.props.ticketText;
    let totalCostText = "";
    if (this.props.price !== "free") {
      ticketText = "Select " + ticketText;
      priceText = this.props.price;
      totalCostText = this.state.totalCost;
    }

    return (
      <div className="ticket-modal group">
        <header>
          <h2>{ ticketText }</h2>
        </header>
        <main>
          <ul className="ticket-options">
            <li className="ticket-option">
              <span className="t-o-top-bar">
                <div>
                  <h3>General Admission</h3>
                  <h4>{ priceText }</h4>
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
                <article>Sales end on { this.props.endDate }</article>
              </span>
            </li>
          </ul>
        </main>
        <footer>
          <article>QTY: {this.state.ticketQuantity }</article>
          <article className="total-price">${ totalCostText }</article>
          <div className="footer-button-div">
            <button onClick={ this.handleSubmit }>PLACE ORDER</button>
          </div>
        </footer>
      </div>
    );
  }
}

export default TicketModal;
