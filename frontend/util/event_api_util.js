export const createEvent = (event) => {
  return $.ajax ({
    method: "POST",
    url: "api/events",
    data: { event: event },
  });
};

export const fetchEvent = (eventId) => {
  return $.ajax ({
    method: "GET",
    url: `api/events/${eventId}`,
  });
};
