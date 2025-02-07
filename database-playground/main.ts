/*
the file to insert the data into the database 
*/

import { DBHelper } from './crud_operartions';
import { client } from './connector_sql';  // Import client to close after execution

// THE CONSTS
const DATA_BASE_NAME: string = 'contact'; 
const TABLE_NAME: string = 'contact.contacts'; 

// Dummy data
const entry = {
    first_name: 'Alice',
    last_name: 'Johnson',
    phone: '987654321',
    address: JSON.stringify({
      street: "456 Elm St",
      city: "Los Angeles",
      country: "USA"
    }) // Convert JSON object to string for JSONB column
};

(async () => {
    try {

        //tested
        await DBHelper.add_value(TABLE_NAME, entry);  // add the data into the database 

        const data = await DBHelper.get_all_values(TABLE_NAME); //print all the values

        console.log("Fetched Data:", data);

        // Updating a record
        const updatedEntry = { phone: '123456789' };
        await DBHelper.update_value(TABLE_NAME, updatedEntry, 'id = 1');

        // Deleting a record
        await DBHelper.delete_value(TABLE_NAME, 'id = 1');

        // Searching for a record
        await DBHelper.search_value(TABLE_NAME, "first_name = 'Alice'");

    } catch (error) {
        console.error("Error:", error);

    } finally {
        await client.end();  // Close the database connection
        console.log("Database connection closed");
        process.exit(0);  // Force exit after execution
    }
})();


