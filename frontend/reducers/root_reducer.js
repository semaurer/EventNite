import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EventReducer from './event_reducer';
import EventsReducer from './events_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  event: EventReducer,
  events: EventsReducer,
});

export default rootReducer;
