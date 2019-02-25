# Bandolier
  * A matchmaking app seeking to help musicians find each other.
  * Deployed at https://quiet-garden-92157.herokuapp.com

## To Install

```
npm install
```
### Create SQL DataBase
```
createdb bandolier_dev
```
### Seed Knex Database
```
npm run knex migrate:latest
npm run knex seed:run
```
### Start Development Server
```
npm run dev
```
