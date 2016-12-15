# EventNite

[EventNite live] (https://eventnite.herokuapp.com/)

EventNite is a full-stack web application inspired by Eventbrite.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Events

Users on EventNite can create, read, update, and delete events.  In the create event form users can
enter a title, location, start time, end time, and description.  They can also specify categories
for their events as well as a price.  Image upload has been provided utilizing paperclip and amazon
web services so that event images are not stored locally on the database.

The aforementioned attributes are stored on one table in the database to easily access event
information for pages where events can be viewed.  Each page on Eventnite for events (such as browse,
create, and the manage events page) have a respective presentational component and container component.
Here is a design template for the create event page:


![image of event create](https://github.com/semaurer/EventNite/blob/master/docs/wireframes/EventCreate.png)

### Tickets/registration

Users can register or buy tickets for any event created on EventNite.  On each event's individual page
a user can place an order for how many tickets they would like.  Tickets then show up in a user's tickets page, providing a snapshot of event information.

The ticket order form is rendered using a modal component which receives props from it's parent component (the event show page/container).  Ticket are very similar to a joins table as they only have three attributes in the database; an event id, a user id, and a purchase date.  It accesses all other relevant information through associations via the rails framework.  The design template for my ticket modal can be seen below:

![image of ticket modal](https://github.com/semaurer/EventNite/blob/master/docs/wireframes/ticket_selection_modal.png)  

### Categories 
