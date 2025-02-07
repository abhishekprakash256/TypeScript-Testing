// the file to get make the crud operations in postgresql 


import { client } from './connector_sql';  // import the clinedt
//import { setupDatabase } from './create_db_schema' ; 

//THE CONSTS
let DATA_BASE_NAME : string = 'contact' ; 
let TABLE_NAME : string = 'contact.contacts' ; 


//run the setupdatabase
//setupDatabase();



// Make sure 'client' is passed to the constructor
class Helper_Fun 

{

  client : any;  // Use the appropriate type for 'client'

  constructor(client: any ) {
    this.client = client ;
  }

  async add_value(database_name: string, table_name: string, entry: object) {
    try {
      // Connect to the specified database
      await this.client.connect();
      console.log(`Connected to database: ${database_name}`);
  
      // Extract columns and values safely
      const columns = Object.keys(entry).join(", ");
      const values = Object.values(entry);
      const placeholders = values.map((_, i) => `$${i + 1}`).join(", ");
  
      // Create a parameterized SQL query
      const query = `INSERT INTO ${table_name} (${columns}) VALUES (${placeholders})`;
  
      // Execute the insert query
      await this.client.query(query, values);
      console.log("Value inserted successfully");
    } catch (error) {
      console.error("Error during inserting value:", error);
    } finally {
      // Disconnect from the database
      await this.client.end();
    }
  }
  

  update_value()
  {
  	/*
	the fucnttion to update the value in sql
  	*/


  }

  delete_value()
  {
  	/*
	The function to delete the value in the sql
  	*/



  }

  search_value()
  {
  	/*
	The function to search the value in the sql
  	*/

  }



}






// Make the helper function and pass 'client' to the constructor
const helper_fun = new Helper_Fun(client);

//console.log(helper_fun.client );


//test the database addtion of the data 

//dummy data
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



helper_fun.add_value(DATA_BASE_NAME , TABLE_NAME , entry)