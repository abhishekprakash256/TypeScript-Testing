// the file to get make the crud operations in postgresql 


import { client } from './connector_sql';  // import the clinedt
import { setupDatabase } from './create_db_schema' ; 

//THE CONSTS
let DATA_BASE_NAME : string = 'contact' ; 


//run the setupdatabase
setupDatabase();



// Make sure 'client' is passed to the constructor
class Helper_Fun 

{

  client : any;  // Use the appropriate type for 'client'

  constructor(client: any ) {
    this.client = client ;
  }

  async add_value(database_name: string = DATA_BASE_NAME, entry: object) {
    try {
      // Connect to the specified database
      await this.client.connect();
      console.log(`Connected to database: ${database_name}`);

      // Switch to the specified database if not already connected
      await this.client.query(`SET search_path TO ${database_name}`);

      // Assume 'entry' is an object that contains column-value pairs, like:
      // { first_name: 'John', last_name: 'Doe', phone: '123456789', address: 'Some Address' }
      // You should update the table name and columns based on your schema
      const columns = Object.keys(entry).join(", ");
      const values = Object.values(entry)
        .map((value) => `'${value}'`)
        .join(", ");

      // Create an SQL query to insert the values into the table
      const query = `INSERT INTO contact_table (${columns}) VALUES (${values})`;

      // Execute the insert query
      await this.client.query(query);
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
  first_name: 'John',
  last_name: 'Doe',
  phone: '123456789',
  address: '123 Street Name, City, Country'
};


helper_fun.add_value(DATA_BASE_NAME , entry)