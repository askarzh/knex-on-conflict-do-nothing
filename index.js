const Knex = require("knex");

function onConflictDoNothing() {
  if (this._method !== "insert") {
    throw new Error(
      "onConflictDoNothing error: should be used only with insert query."
    );
  }

  return this.client.raw(`${this.toString()} on conflict do nothing`);
}

function attachOnConflictDoNothing(knex = Knex) {
  knex.QueryBuilder.extend("onConflictDoNothing", onConflictDoNothing);
}

module.exports = { attachOnConflictDoNothing };
