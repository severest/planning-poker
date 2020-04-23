# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_23_142727) do

  create_table "poker_session_participants", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "poker_session_id", null: false
    t.string "vote"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["poker_session_id"], name: "index_poker_session_participants_on_poker_session_id"
    t.index ["user_id"], name: "index_poker_session_participants_on_user_id"
  end

  create_table "poker_sessions", force: :cascade do |t|
    t.string "unique_key"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "unique_key"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "poker_session_participants", "poker_sessions"
  add_foreign_key "poker_session_participants", "users"
end
