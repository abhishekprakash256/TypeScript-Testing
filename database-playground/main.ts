/*
the file to insert the data into the database 
*/

//import { DBHelper } from './crud_operartions';
//import { client } from './connector_sql';  // Import client to close after execution

// THE CONSTS
const DATA_BASE_NAME: string = 'contact'; 
const TABLE_NAME: string = 'contact.contacts'; 

import { Helper_Fun } from './crud_operartions';
import { client } from './connector_sql';

// Create an instance of Helper_Fun
const dbHelper = new Helper_Fun(client);

// Inserting a new record
const newEntry = {
  first_name: 'Alice',
  last_name: 'Johnson',
  phone: '987654321',
  address: JSON.stringify({
    street: "456 Elm St",
    city: "Los Angeles",
    country: "USA"
  })
};


async function main() {

    try 
    {
    await dbHelper.add_value(TABLE_NAME, newEntry);

    // Fetching all records
    await dbHelper.get_all_values(TABLE_NAME);

    // Updating a record
    const updatedEntry = { phone: '123456789' };
    await dbHelper.update_value(TABLE_NAME, updatedEntry, 'id = 1');

    // Deleting a record
    await dbHelper.delete_value(TABLE_NAME, 'id = 1');

    // Searching for a record
    await dbHelper.search_value(TABLE_NAME, "first_name = 'Alice'");

    }

    catch (error) {

        console.error("Error:", error);
    } 
    
    finally {
        await dbHelper.closeConnection();
    }

}

main(); // Call the function