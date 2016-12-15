json.extract! user, :id, :fname, :lname, :email
json.set! json.saved_events user.saved_events
# json.set! :saved_events do
#   user.saved_events.each do |saved_event|
#     json.set! saved_event.id
#     json.event_id saved_event.id
#   end
# end
