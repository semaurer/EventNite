# EventNite

[EventNite live] (https://eventnite.herokuapp.com/)

EventNite is a web application inspired by Eventbrite.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Events

Users on EventNite can create, read, update, and delete events.  In the create event form users can
enter a title, location, start time, end time, and description.  They can also specify categories
for their events as well as a price.  Image upload has been provided utilizing paperclip (a ruby gem) and amazon web services (remote file storage).

The aforementioned attributes are stored on one table in the database. Each event page (such as browse, create, and the manage events page) have a respective presentational component and container component.  Here is a design template for the create event page:


![image of event create](https://github.com/semaurer/EventNite/blob/master/docs/wireframes/EventCreate.png)

### Tickets/registration

Users can register or buy tickets for any event created on EventNite.  On each event's individual page
a user can place an order for how many tickets they would like.  Tickets then show up in a user's tickets page, providing a snapshot of event information.

The ticket order form is rendered using a react modal component which receives props from the event show page/container.  Ticket are very similar to a joins table as they only have three attributes in the database; an event id, a user id, and a purchase date.  It accesses all other relevant information through associations via the rails framework.  The design template for my ticket modal can be seen below:

![image of ticket modal](https://github.com/semaurer/EventNite/blob/master/docs/wireframes/ticket_selection_modal.png)  

### Categories

On the browse events page users can filter events by categories and sub-categories. This allows users to find events that better match their interests.  Categories are rendered on the events index component, using state to dynamically render the menu.  

Categories are connected to events using a joins table called EventCategories.  EventCategories have an
event id as well as a category id.  Using the joins table, events are filtered using active record within
rails controller actions.

### Bookmarks

If a user is interested in an event, but does not want to buy tickets at the time, they can bookmark (save)
an event. This places the event in the users saved events page, which they can then view at any time.  

Bookmarks are implemented using a joins table, which reference an event id and a user id.  Bookmarked events
are retrieved using the association created by the joins table.

## Future Directions for the Project

### Pagination

Starting immediately, I will begin implementing pagination for the browse events page.

### Search

A search bar will be added to the home page as well as the header, so that users can quickly search for
specific events.

### Map

A map will be added to the browse events page so that users can search for an event in a specific area.
