/*
The function to make the connection with postgresql    

*/


// dbConnection.ts
import { Client } from 'pg';

// Create a new PostgreSQL client
const client = new Client({
  user: 'abhi', // Replace with your database username
  host: 'localhost',     // Replace with your database host if different
  database: 'contact',   // Replace with your database name
  password: 'mypassword', // Replace with your database password
  port: 5432,            // Default PostgreSQL port
});


//rpint the client values
//console.log(client) ; 

// export the client 
export { client } ; 


