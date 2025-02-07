// the file to get make the crud operations in postgresql 


import { client } from './connector_sql';  // import the clinedt
//import { setupDatabase } from './create_db_schema' ; 



// Make sure 'client' is passed to the constructor
class Helper_Fun {
  client: any;  // Use the appropriate type for 'client'

  constructor(client: any) {
    this.client = client;
  }

  // Method to insert data into a table
  async add_value(table_name: string, entry: object) {
    try {
      console.log(`📌 Inserting into table: ${table_name}`);
      
      // Extract columns and values
      const columns = Object.keys(entry).join(", ");
      const values = Object.values(entry);
      const placeholders = values.map((_, i) => `$${i + 1}`).join(", ");
      
      const query = `INSERT INTO ${table_name} (${columns}) VALUES (${placeholders})`;
      await this.client.query(query, values);
      
      console.log("Value inserted successfully");
    } catch (error) {
      console.error(" Error inserting value:", error);
    }
  }

  // Fetch Data and Close Connection
  async get_all_values(table_name: string) {
    try {
      console.log(`Fetching all values from table: ${table_name}`);

      const query = `SELECT * FROM ${table_name}`;
      const result = await this.client.query(query);

      console.log("Retrieved Data:", result.rows);
      return result.rows;
    } catch (error) {
      console.error("Error retrieving data:", error);
      return [];
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



const DBHelper = new Helper_Fun(client);
export { DBHelper };

//helper_fun.add_value( TABLE_NAME , entry)

//helper_fun.get_all_values( TABLE_NAME )