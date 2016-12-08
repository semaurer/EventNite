import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EventReducer from './event_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  event: EventReducer,
});

export default rootReducer;
