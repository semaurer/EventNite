# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161213221936) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",               null: false
    t.integer  "parent_category_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["parent_category_id"], name: "index_categories_on_parent_category_id", using: :btree
  end

  create_table "event_categories", force: :cascade do |t|
    t.integer  "event_id",    null: false
    t.integer  "category_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["category_id"], name: "index_event_categories_on_category_id", using: :btree
    t.index ["event_id"], name: "index_event_categories_on_event_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "title",                               null: false
    t.datetime "start_date_time",                     null: false
    t.datetime "end_date_time",                       null: false
    t.boolean  "private",            default: false,  null: false
    t.integer  "author_id",                           null: false
    t.string   "location"
    t.string   "event_type"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.text     "description"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "price",              default: "free", null: false
    t.index ["author_id"], name: "index_events_on_author_id", using: :btree
    t.index ["start_date_time"], name: "index_events_on_start_date_time", using: :btree
    t.index ["title"], name: "index_events_on_title", using: :btree
  end

  create_table "tickets", force: :cascade do |t|
    t.date     "purchase_date", null: false
    t.integer  "buyer_id",      null: false
    t.integer  "event_id",      null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["buyer_id"], name: "index_tickets_on_buyer_id", using: :btree
    t.index ["event_id"], name: "index_tickets_on_event_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                 null: false
    t.string   "fname",                 null: false
    t.string   "lname",                 null: false
    t.string   "password_digest",       null: false
    t.string   "session_token",         null: false
    t.string   "organizer_name"
    t.text     "organizer_description"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
