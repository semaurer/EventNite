export const createTicket = (ticket) => {
  return $.ajax ({
    method: "POST",
    url: "/api/tickets",
    data: { ticket: ticket }
  });
};
