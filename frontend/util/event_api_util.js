export const createEvent = (formData) => {
  return $.ajax ({
    method: "POST",
    url: "api/events",
    data: formData,
    contentType: false,
    processData: false,
  });
};

export const fetchEvent = (eventId) => {
  return $.ajax ({
    method: "GET",
    url: `api/events/${eventId}`,
  });
};
