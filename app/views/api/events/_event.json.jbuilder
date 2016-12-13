json.extract! event, :id, :title, :start_date_time,
  :end_date_time, :private, :location, :event_type,
  :description, :price
json.set! json.formatted_start_date_time event.format_date_time(event.start_date_time)
json.set! json.formatted_end_date_time event.format_date_time(event.end_date_time)
json.set! json.start_month event.format_month(event.start_date_time)
json.set! json.start_time event.format_time(event.start_date_time)
json.set! json.end_time event.format_time(event.end_date_time)
json.set! json.start_day event.pad_day(event.start_date_time.day)
json.set! json.end_date_ticket event.format_end_date_day(event.end_date_time)
json.set! json.image_url asset_path(event.image.url)
json.set! :author do
  json.email event.author.email
  json.first_name event.author.fname
end
