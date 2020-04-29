#!/bin/ash
set -e
bin/rails db:create
bin/rails db:migrate
bin/rails s -b 0.0.0.0
