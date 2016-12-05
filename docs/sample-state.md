```js
{
  currentUser: {
    id: 1,
    email: "bob@gmail.com",
    name: "bob jacuzzi"
    birthday: 1987-Jan-10,
    gender: "M",
    address: "123 mcBerry Lane, new york NY, 10039",
    phone: "917-944-9039"
    image: TBD, 
    },
    forms: {
      signUp: { errors: [] },
      logIn: { errors: [] },
      eventCreation: { errors: [] },
      createEventTicketsForm: { errors: [] },
      createTicketForm: {errors: [] }
    },
    events: {
      3: {
          title: "Salsa at Treetop 5",
          location: "31 broadway, new york NY, 10001",
          start_date: 2017-Dec-12, 
          end_date: 2017-Dec-12, 
          start_time: 15:00,
          end_time: 18:00,
          event_image: TBD,
          organizer_id: 1,
          organizer_name: "Salsa 5",
          organizer_description: "We host salsa events every friday",
          organizer_image: TBD,
          private: false,
          type: "social gathering",
          }
    },
    ticket: {
      2: {
        event_id: 3,
        buyer_id: 1,
        buyer_fname: "jan",
        buyer_lname: "valentine",
        buyer_email: "janValentine@gmail.com",
        event_title: "Salsa at Treetop 5",
        event_date: 2016-Jan-13,
        event_time: 15:00,
        event_image: TBD,
        order_number: 4013914,
        purchase_date: 2016-Dec-12,
        }
    }
    categories: {
      1: {
        name: "Music",
        event_id: 3
      }
    }
}
```    
    
