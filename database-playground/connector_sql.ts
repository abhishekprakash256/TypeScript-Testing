/*
The function to make the connection with postgresql    

*/


import { Client } from 'pg';

const client = new Client({
  user: 'abhi',
  host: 'localhost',
  database: 'contact',
  password: 'mypassword',
  port: 5432,
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error(" Database Connection Error:", err));

export { client };

