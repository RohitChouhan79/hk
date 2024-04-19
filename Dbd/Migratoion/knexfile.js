// Update with your config settings.

const { knexSnakeCaseMappers } = require("objection");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * 
 */

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      database: 'Hakerkernel',
      user:     'Rohit',
      password: null,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
      seeds:{
        directory:"./Seeds"
      }
  },
  ...knexSnakeCaseMappers
};
