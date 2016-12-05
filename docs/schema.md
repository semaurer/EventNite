# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    | 
birthday        | date      | 
gender          | string    | 
address         | string    | 
phone           | string    | 
image           | bytea    |

## events
column name           | data type | details
----------------------|-----------|-----------------------
id                    | integer   | not null, primary key
title                 | string    | not null, indexed
location              | string    | 
start_date            | date      | not null, indexed 
end_date              | date      | not null
start_time            | time      | not null, indexed
end_time              | time      | not null
event_image_url       | string    | 
organizer_name        | string    | 
organizer_description | string    | 
organizer_image       | bytea     | 
organizer_id          | integer   | not null, foreign key (references users), indexed
private               | boolean   | not null, default: false
type                  | string    | 

## tickets
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
order_number    | integer   | not null, indexed 
purchase_date   | date      | not null
buyer_fname     | string    | not null
buyer_lname     | string    | not null
buyer_email     | string    | not null
buyer_id        | integer   | not null, foreign key (references users), indexed
event_title     | string    | not null
event_date      | date      | not null
event_time      | time      | not null
event_image     | bytea     | 
event_id        | integer   | not null, foreign key (references events), indexed

##categories
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed 
event_id        | integer   | not null, foreign key (references events), indexed
