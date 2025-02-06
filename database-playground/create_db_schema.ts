/*
file to create the db and db schema and tables 
*/

import { client } from './connector_sql';  // import the clinedt

async function setupDatabase() {
    try {
      // Connect to the client
      await client.connect();
      console.log('Connected to PostgreSQL');
  
      // Create a new database
      await client.query('CREATE DATABASE contact');
      console.log('Database created');
  
      // Reconnect to the newly created database
      await client.end();
      client.database = 'contact';
      await client.connect();
      console.log('Reconnected to new database');
  
      // Create a new schema
      await client.query('CREATE SCHEMA IF NOT EXISTS contact');
      console.log('Schema created or already exists');
  
      // Create the table with a JSONB column for address
      await client.query(`
        CREATE TABLE IF NOT EXISTS contact.contacts (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(100) NOT NULL,
          last_name VARCHAR(100) NOT NULL,
          phone VARCHAR(15),
          address JSONB,  -- Store address as a JSONB object
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      console.log('Table "contacts" created or already exists');

    } catch (error) {

      console.error('Error during database setup:', error);

    } finally {

      // Make sure to disconnect
      await client.end();

    }
  }

export { setupDatabase } ;   