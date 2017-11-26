import { connect } from 'react-redux';
import EventsPreview from './eventsPreview';
import { fetchEvents, saveEvent, unsaveEvent } from '../../actions/event_actions';
import { selectEvents } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  const { session } = state;

  return {
    currentUser: session.currentUser,
    events: selectEvents(state),
    savedEvents: session.currentUser ? session.currentUser.saved_events : []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    saveEvent: (eventId) => dispatch(saveEvent(eventId)),
    unsaveEvent: (eventId) => dispatch(unsaveEvent(eventId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPreview);