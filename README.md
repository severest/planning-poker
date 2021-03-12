# Planning poker

[![Build Status](https://sean.semaphoreci.com/badges/planning-poker/branches/master.svg?style=shields)](https://sean.semaphoreci.com/projects/planning-poker)

An app to remotely estimate issues during a Scrum planning session. Users can choose their estimate and when all non-spectators
have responded the consensus is revealed.

### Contributing

Use the following steps to get the app up and running on your machine

1. Install [rbenv](https://github.com/rbenv/rbenv#installation)
2. Install [nvm](https://github.com/nvm-sh/nvm#install--update-script)
3. Install [yvm](https://yvm.js.org/docs/overview#installation)
4. `rbenv install 2.7.1`
5. `gem install bundler:2.1.4`
6. `bundle install`
7. `nvm install 12.16.3`
8. `yarn install --pure-lockfile`
9. `bin/rails db:create`
10. `bin/rails db:migrate`
11. `bin/rails s`
12. <http://localhost:3000>
