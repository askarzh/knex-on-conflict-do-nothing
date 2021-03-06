# knex-on-conflict-do-nothing

Knex & pg extension. It adds .onConflictDoNothing() function to knex's quiry builder to support `on conflict do nothing` by **PostgreSQL**.

## How to set up

To use this lib, first you will have to install it:

```
npm i knex-on-conflict-do-nothing --save
```

or

```
yarn add knex-on-conflict-do-nothing
```

Then, add the following lines to your Knex set up:

```javascript
const knex = require("knex")(config);

const { attachOnConflictDoNothing } = require("knex-on-conflict-do-nothing");
attachOnConflictDoNothing();
```

## Function definition

```javascript
onConflictDoNothing(): Knex.QueryBuilder
```

## How to use

### Example

```javascript
await knex
  .insert({ id: 1, name: "John", email: "john@mail.com" })
  .into("persons")
  .onConflictDoNothing();
```

This lib got inspiration from [`knex-on-duplicate-update`](https://github.com/felixmosh/knex-on-duplicate-update).
