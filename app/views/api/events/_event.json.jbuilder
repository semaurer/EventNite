json.extract! event, :id, :title, :start_date_time,
  :end_date_time, :private, :location, :event_type,
  :description
json.set! json.image_url asset_path(event.image.url)
json.set! :author do
  json.email event.author.email
  json.first_name event.author.fname
end
