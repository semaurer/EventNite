json.extract! ticket
json.set! json.formatted_date ticket.format_purchase_date(ticket.purchase_date)
json.set! json.event_title ticket.event.title
json.set! json.event_start_date ticket.event.format_date_time(ticket.event.start_date_time)
json.set! json.event_start_time ticket.event.format_time(ticket.event.start_date_time)
json.set! json.event_id ticket.event.id
json.set! json.event_image_url asset_path(ticket.event.image.url)
