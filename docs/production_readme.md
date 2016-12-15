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
