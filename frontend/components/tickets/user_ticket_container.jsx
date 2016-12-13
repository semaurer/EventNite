import React from 'react';
import { connect } from 'react-redux';
import UserTicketPage from './user_ticket_page';
import { selectTickets } from '../../reducers/selectors';
import { fetchTickets } from '../../actions/ticket_actions';

const mapStateToProps = (state) => {
  return {
    tickets: selectTickets(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTickets: () => dispatch(fetchTickets()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTicketPage);
