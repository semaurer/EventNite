export const createTicket = (ticket) => {
  return $.ajax ({
    method: "POST",
    url: "/api/tickets",
    data: { ticket: ticket }
  });
};

export const fetchTickets = () => {
  return $.ajax({
    method: "GET",
    url: "/api/tickets",
  });
};
