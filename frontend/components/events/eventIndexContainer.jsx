import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './eventIndex';
import { selectEvents } from '../../reducers/selectors';
import { fetchEvents, saveEvent, unsaveEvent } from '../../actions/event_actions';

const mapStateToProps = ({ categories, events, search, session}) => {
  return {
    events: events.events ? selectEvents(events, search) : [],
    savedEvents: session.currentUser ? session.currentUser.saved_events : [],
    currentUser: session.currentUser,
    search: search.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    saveEvent: (eventId) => dispatch(saveEvent(eventId)),
    unsaveEvent: (eventId) => dispatch(unsaveEvent(eventId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
