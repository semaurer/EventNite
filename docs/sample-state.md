```js
{
  currentUser: {
    id: 1,
    fname: "bob",
    lname: "jacuzzi",
    email: "bob@gmail.com",
    password_digest: "flf2102012020f21f",
    session_token: "fk102fk201fk12f0af",
    organizer_name: "Jazzy Enterprises",
    organizer_description: "We are a jazzy group devoted to hosting jazz events"
    },
    errors: {
      signUp: [],
      logIn: [],
      eventCreation: [],
      createEventTicketsForm: [],
      createTicketForm: []
    },
    events: {
      3: {
          title: "Salsa at Treetop 5",
          start_date_time: <DateTime: 2017-02-03T19:00>, 
          end_date_time: <DateTime: 2017-02-03T22:00>, 
          private: false,
          author_id: 1,         
          location: "31 broadway, new york NY, 10001",
          event_type: "social gathering"
          }
    },
    ticket: {
      2: {
        purchase_date: 2016-Dec-12,
        buyer_id: 1,
        event_id: 3,
        }
    }
    categories: {
      1: {
        name: "Music",
        event_id: 3
      }
    }
    Sub_topics: {
      1: {
        name: food,
        category_id: 3,
        event_id: 1
      }
    }
}
```    
    
