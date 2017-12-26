import { merge } from 'lodash';

export const selectEvents = ({ events }, { search }) => {
  const selectedEvents = Object.keys(events).map(eventId => {
    const currentTitle = events[eventId].title.toLowerCase();
    const searchEntry = search.toLowerCase();
    if (currentTitle.includes(searchEntry)) return events[eventId];
  });
  return selectedEvents.filter((event) => event);
};

export const selectCurrentUserEvents = ({ events }, { currentUser }) => {
  const selectedEvents = [];

  Object.keys(events).forEach(eventId => {
    if (events[eventId].author.email === currentUser.email) {
      selectedEvents.push(events[eventId]);
    }
  });

  return selectedEvents;
};

export const selectTickets = ({ tickets }) => {
  const condensedTickets = condenseTickets(tickets);

  return Object.keys(condensedTickets).map(eventId => {
    return condensedTickets[eventId];
  });
};

function condenseTickets(tickets) {
  let condensedTickets = {};
  const eventIds = [];
  Object.keys(tickets).forEach(ticketId => {
    if (eventIds.includes(tickets[ticketId].event_id)) {
      condensedTickets[tickets[ticketId].event_id].ticketCount += 1;
      condensedTickets[tickets[ticketId].event_id].tickets.push(tickets[ticketId]);
    } else {
      condensedTickets[tickets[ticketId].event_id] = {};
      condensedTickets[tickets[ticketId].event_id].tickets = [];
      condensedTickets[tickets[ticketId].event_id].tickets.push(tickets[ticketId]);
      condensedTickets[tickets[ticketId].event_id].ticketCount = 1;
      eventIds.push(tickets[ticketId].event_id);
    }
  });
  return condensedTickets;
}

export const selectCategories = ({ categories }) => {
  return Object.keys(categories).map(categoryId => {
    return categories[categoryId];
  });
};

export const removeSavedEvent = (state, targetId) => {
  const newSavedEvents = [];
  state.currentUser.saved_events.forEach(savedEventId => {
    if (targetId !== savedEventId) {
      newSavedEvents.push(savedEventId);
    }
  });
  const newCurrentUser = Object.assign({}, state.currentUser, { saved_events: newSavedEvents });
  return Object.assign({}, state, { currentUser: newCurrentUser });
};
