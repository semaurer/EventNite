import { combineReducers } from 'redux';
import SessionReducer from './sessionReducer';
import EventReducer from './eventReducer';
import EventsReducer from './eventsReducer';
import TicketReducer from './ticketReducer';
import TicketsReducer from './tickets_reducer';
import CategoriesReducer from './categoriesReducer';
import SearchReducer from './searchReducer';

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
