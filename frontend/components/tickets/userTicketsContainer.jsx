import React from 'react';
import { connect } from 'react-redux';
import userTickets from './userTickets';
import { selectTickets } from '../../reducers/selectors';
import { fetchTickets } from '../../actions/ticket_actions';

const mapStateToProps = ({ session, tickets }) => {
  return {
    tickets: tickets.tickets ? selectTickets(tickets) : [],
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTickets: () => dispatch(fetchTickets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(userTickets);
