export const selectEvents = (state) => {
  const events = [];

  if (state.events.events !== null) {
    Object.keys(state.events.events).forEach(eventId => {
      events.push(state.events.events[eventId]);
    });
  }
  return events;
};

export const selectCurrentUserEvents = (state) => {
  const events = [];

  if (state.events.events !== null) {
    Object.keys(state.events.events).forEach(eventId => {
      if (state.events.events[eventId].author.email ===
        state.session.currentUser.email) {
        events.push(state.events.events[eventId]);
        }
    });
  }
  return events;
};

export const selectTickets = (state) => {
  let condensedTickets = {};
  if (state.tickets.tickets !== null) {
    condensedTickets = condenseTickets(state.tickets.tickets);
  }

  const ticketsPerEvent = [];

  if (condensedTickets !== null) {
    Object.keys(condensedTickets).forEach(eventId => {
      ticketsPerEvent.push(condensedTickets[eventId]);
    });
  }
  return ticketsPerEvent;
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
