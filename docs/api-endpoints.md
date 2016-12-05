# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Events
- `GET /api/events`
  + events index/search 
- `POST /api/events`
- `GET /api/events/:id`
- `PATCH /api/events/:id`
- `DELETE /api/events/:d`

### Tickets 
- `GET /api/users/:id/tickets`
  + tickets index for a particular user
- `POST /api/events/:id/tickets`
- `GET /api/users/:id/tickets/:id`
  + ticket show for a particular user
- `DELETE /api/users/:id/tickets/:id`

### Categories
- `GET /api/categories`
  + categories index
- `POST /api/events/:id/categories`
  + accepts event id to create association to an event
- `DELETE /api/categories/:id`

