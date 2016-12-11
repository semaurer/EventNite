export const selectEvents = (state) => {
  const events = [];

  if (state.events.events !== null) {
    Object.keys(state.events.events).forEach (eventId => {
      events.push(state.events.events[eventId]);
    });
  }
  return events;
};
