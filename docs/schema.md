# Schema Information

## users
column name           | data type | details
----------------------|-----------|-----------------------
id                    | integer   | not null, primary key
fname                 | string    | not null
lname                 | string    | not null
email                 | string    | not null, indexed, unique
password_digest       | string    | not null
session_token         | string    | not null, indexed, unique
organizer_name        | string    | 
organizer_description | string    | 

## events
column name           | data type | details
----------------------|-----------|-----------------------
id                    | integer   | not null, primary key
title                 | string    | not null, indexed
start_date_time       | datetime  | not null, indexed 
end_date_time         | datetime  | not null
private               | boolean   | not null, default: false
author_id             | integer   | not null, foreign key (references users), indexed
location              | string    | 
event_type            | string    | 

## tickets
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
purchase_date   | date      | not null
buyer_id        | integer   | not null, foreign key (references users), indexed
event_id        | integer   | not null, foreign key (references events), indexed

## categories
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed 
event_id        | integer   | not null, foreign key (references events), indexed

## Sub_topics
column name     | data type | details 
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed 
category_id     | integer   | not null, foreign key (references categories), indexed
event_id        | integer   | not null, foreign key (references events), indexed
