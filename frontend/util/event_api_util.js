export const createEvent = (event) => {
  return $.ajax ({
    method: "POST",
    url: "api/events",
    data: { event: event },
  });
};
