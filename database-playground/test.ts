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


const bulkEntries = [
  {
    first_name: 'Alice',
    last_name: 'Johnson',
    phone: '987654321',
    address: JSON.stringify({
      street: "456 Elm St",
      city: "Los Angeles",
      country: "USA"
    })
  },
  {
    first_name: 'Bob',
    last_name: 'Smith',
    phone: '123456789',
    address: JSON.stringify({
      street: "789 Oak St",
      city: "New York",
      country: "USA"
    })
  },
  {
    first_name: 'Charlie',
    last_name: 'Brown',
    phone: '555888999',
    address: JSON.stringify({
      street: "321 Maple Ave",
      city: "Chicago",
      country: "USA"
    })
  }
];


const upsertEntry = {
  first_name: 'Alice',
  last_name: 'Williams',  // Changed last name to test update
  phone: '987654321',
  address: JSON.stringify({
    street: "456 Elm St",
    city: "Los Angeles",
    country: "USA"
  })
};

const searchCondition = "first_name = 'Charlie' AND phone = '555888999'";



// Create an instance of Helper_Fun
const dbHelper = new Helper_Fun(client);

async function test_fun() {

    try 
    {
    //insert the one data
    await dbHelper.add_value(TABLE_NAME, newEntry);
    
    //insert the data in bulk
    await dbHelper.bulk_insert(TABLE_NAME, bulkEntries);

    // Updating a record
    const updatedEntry = { phone: '123456789' };

    //update one value 
    await dbHelper.update_value(TABLE_NAME, updatedEntry, 'id = 1');
    
    //upsert the value
    await dbHelper.upsert(TABLE_NAME, upsertEntry, "id" );
    
    //paignation of users
    const paginatedUsers = await dbHelper.fetch_paginated(TABLE_NAME, 5, 0);
    console.log("Paginated Users:", paginatedUsers);

    // Deleting a record
    await dbHelper.delete_value(TABLE_NAME, 'id = 1');
    
    //get the total users
    const totalUsers = await dbHelper.count_rows(TABLE_NAME);
    console.log(`Total Users: ${totalUsers}`);

    // Searching for a record
    await dbHelper.search_value(TABLE_NAME, "first_name = 'Alice'");
    
    //get the user as per condition
    const userExists = await dbHelper.record_exists(TABLE_NAME, searchCondition);
    console.log("User Exists:", userExists);

    // Fetching all records
    await dbHelper.get_all_values(TABLE_NAME);
    
    // the function to delete all the values
    await dbHelper.truncate_table(TABLE_NAME);

    }

    catch (error) {

        console.error("Error:", error);
    } 
    
    finally {
        await dbHelper.closeConnection();
    }

}

// all the tests are working and passing
test_fun(); // Call the function