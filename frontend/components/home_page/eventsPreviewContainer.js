import { connect } from 'react-redux';
import EventsPreview from './eventsPreview';
import { fetchEvents, saveEvent, unsaveEvent } from '../../actions/event_actions';
import { selectEvents } from '../../reducers/selectors';

const mapStateToProps = ({ events, search, session }) => {
  return {
    currentUser: session.currentUser,
    events: events.events ? selectEvents(events, search) : [],
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