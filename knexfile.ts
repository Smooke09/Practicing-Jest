import type { Knex } from "knex";

// Update with your config settings.
const knexfile: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "password",
      database: "aula",
      charset: "utf8",
    },
    migrations: {
      directory: __dirname + "/src/database/migrations",
    },
    seeds: {
      directory: __dirname + "/src/database/seeds",
    },
  },

  testJest: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "password",
      database: "aula",
      charset: "utf8",
    },
    migrations: {
      directory: __dirname + "/src/database/migrations",
    },
    seeds: {
      directory: __dirname + "/src/database/seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "testjest",
      user: "postgres",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default knexfile;
