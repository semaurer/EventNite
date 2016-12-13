import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EventReducer from './event_reducer';
import EventsReducer from './events_reducer';
import TicketReducer from './ticket_reducer';
import TicketsReducer from './tickets_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  event: EventReducer,
  events: EventsReducer,
  ticket: TicketReducer,
  tickets: TicketsReducer,
});

export default rootReducer;
