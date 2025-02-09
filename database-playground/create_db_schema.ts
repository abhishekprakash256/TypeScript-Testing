/*
file to create the db and db schema and tables 
*/

import { client } from './connector_sql';  // Import client

async function setupDatabase() {   
    try {
        // Connect to PostgreSQL (Assumes database & schema already exist)
        //await client.connect();
        //console.log('Connected to PostgreSQL');

        // Ensure the table exists in the `contact` schema
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

        console.log('Table "contacts" ensured');

    } catch (error) {
        console.error('Error during database setup:', error);
    } finally {
        // Disconnect after setup
        await client.end();
    }
}

//export { setupDatabase };
   
setupDatabase() ; 