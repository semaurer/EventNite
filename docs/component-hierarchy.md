## Component Hierarchy

**AuthFormContainer**
  - signInModal
  - signUpModal

**HomeContainer**
  - HeaderNavBar
  - HomeImage
  - SearchBar
  - EventIndexPreview
   + event browse link
  - categoriesIndex
  - footer
  
 **CreateEventContainer**
  - eventHeader
  - eventCreationForm
  - createEventTicketsForm
  
 **EventIndexContainer**
  - categoriesFilter
  - eventsList
  - eventListingsNav
  - map
  
 **CategoryContainer**
  - filter
  
 **EventShowContainer**
  - ticketCreate
  - eventInfo
  - organizerPreview (organizer = user)
  - map
  - eventSuggestions
  
 **TicketQuantityContainer**
  - ticketModal
  
 **TicketCreateContainer**
  - eventInfo
  - createTicketForm
  - organizerPreview
  
**TicketShowContainer**
  - ticketInfo
  - userInfo
  
 **UserProfileContainer**
  - profileInfo
  - eventsHeader
  - eventTabs

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/events/new-event" | "CreateEventContainer" |
| "/events/events-index" | "EventIndexContainer" |
| "/events/events-index/category" | "CategoryContainer |
| "/events/events-show/:eventId" | "EventShowContainer" |
| "/events/events-show/:eventId/tickets" | "TicketQuantityContainer" |
| "/tickets/tickets-creater" | "TicketCreateContainer" |
| "/users/user-profile/:userId" | "UserProfileContainer" |
| "/users/user-profile/:userId/tickets/ticket-show/:ticket-id" | "TicketShowContainer" |

