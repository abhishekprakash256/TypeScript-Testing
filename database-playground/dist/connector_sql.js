"use strict";
/*
The function to make the connection with postgresql

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// dbConnection.ts
var pg_1 = require("pg");
// Create a new PostgreSQL client
var client = new pg_1.Client({
    user: 'postgres', // Replace with your database username
    host: 'localhost', // Replace with your database host if different
    //database: 'your_db',   // Replace with your database name
    //password: 'your_password', // Replace with your database password
    port: 5432, // Default PostgreSQL port
});
exports.client = client;
