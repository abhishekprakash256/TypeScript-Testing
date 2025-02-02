/*
The function to make the connection with postgresql    

*/



// dbConnection.ts
import { Client } from 'pg';

// Create a new PostgreSQL client
const client = new Client({
  user: 'postgres', // Replace with your database username
  host: 'localhost',     // Replace with your database host if different
  //database: 'your_db',   // Replace with your database name
  //password: 'your_password', // Replace with your database password
  port: 5432,            // Default PostgreSQL port
});


//rpint the client values
//console.log(client) ; 

// export the client 
export { client } ; 
