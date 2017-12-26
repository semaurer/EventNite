import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EventReducer from './eventReducer';
import EventsReducer from './events_reducer';
import TicketReducer from './ticket_reducer';
import TicketsReducer from './tickets_reducer';
import CategoriesReducer from './categoriesReducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  event: EventReducer,
  events: EventsReducer,
  ticket: TicketReducer,
  tickets: TicketsReducer,
  categories: CategoriesReducer,
  search: SearchReducer,
});

export default rootReducer;
