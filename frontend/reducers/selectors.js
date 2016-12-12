export const selectEvents = (state) => {
  const events = [];

  if (state.events.events !== null) {
    Object.keys(state.events.events).forEach (eventId => {
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
