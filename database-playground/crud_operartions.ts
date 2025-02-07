// the file to get make the crud operations in postgresql 


//import { client } from './connector_sql';  // import the clinedt
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
      console.log(`Inserting into table: ${table_name}`);
      
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
  


// Method to update an existing value in a table
async update_value(table_name: string, entry: object, condition: string) {
  try {
    console.log(`Updating value in table: ${table_name}`);

    // Extract columns, values, and build SET statement
    const columns = Object.keys(entry);
    const values = Object.values(entry);
    const setClause = columns.map((col, index) => `${col} = $${index + 1}`).join(", ");

    // The condition is assumed to be like 'id = 1'
    const query = `UPDATE ${table_name} SET ${setClause} WHERE ${condition}`;

    await this.client.query(query, values);
    console.log("Value updated successfully");
  } catch (error) {
    console.error("Error updating value:", error);
  }
}

// Method to delete a value from a table
async delete_value(table_name: string, condition: string) {
  try {
    console.log(`Deleting value from table: ${table_name}`);

    // The condition is assumed to be like 'id = 1'
    const query = `DELETE FROM ${table_name} WHERE ${condition}`;

    await this.client.query(query);
    console.log("Value deleted successfully");
  } catch (error) {
    console.error("Error deleting value:", error);
  }
}

// Method to search for a specific value in a table based on a condition
async search_value(table_name: string, search_condition: string) {
  try {
    console.log(`Searching value in table: ${table_name}`);

    // The search condition is assumed to be like 'name = 'Alice''
    const query = `SELECT * FROM ${table_name} WHERE ${search_condition}`;
    const result = await this.client.query(query);

    console.log("Search results:", result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error searching value:", error);
    return [];
  }
}



async closeConnection() {
  /*
  close the connection if needed
  */
  try {
    await this.client.end();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error closing connection:", error);
  }
}

}

//test the database addtion of the data 

//const DBHelper = new Helper_Fun(client);
export { Helper_Fun };

