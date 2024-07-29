import knex from 'knex';
export const mysqlDBConnection = knex
  ({
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root123',
      database: 'COMMERCE_GRAPHQL_REFACTORED_DB',
    },    
  });