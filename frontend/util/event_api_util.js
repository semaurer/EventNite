export const createEvent = (formData, catIds) => {
  const parentCatId = catIds[0];
  const subCatId = catIds[1];

  return $.ajax ({
    method: "POST",
    url: `api/events?filter=${parentCatId}_${subCatId}`,
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

export const fetchEvents = () => {
  return $.ajax ({
    method: "GET",
    url: "/api/events"
  });
};

export const updateEvent = (formData, eventId) => {
  return $.ajax ({
    method: "PATCH",
    url: `api/events/${eventId}`,
    data: formData,
    contentType: false,
    processData: false,
  });
};

export const deleteEvent = (eventId) => {
  return $.ajax ({
    method: "DELETE",
    url: `api/events/${eventId}`,
  });
};
