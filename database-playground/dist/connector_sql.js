"use strict";
/*
The function to make the connection with postgresql

*/
exports.__esModule = true;
exports.client = void 0;
// dbConnection.ts
var pg_1 = require("pg");
// Create a new PostgreSQL client
var client = new pg_1.Client({
    user: 'abhi',
    host: 'localhost',
    database: 'contact',
    password: 'mypassword',
    port: 5432
});
exports.client = client;
