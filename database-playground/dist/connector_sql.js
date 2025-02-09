"use strict";
/*
The function to make the connection with postgresql

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var pg_1 = require("pg");
var client = new pg_1.Client({
    user: 'abhi',
    host: 'localhost',
    database: 'contact',
    password: 'mypassword',
    port: 5432,
});
exports.client = client;
client.connect()
    .then(function () { return console.log("Connected to PostgreSQL"); })
    .catch(function (err) { return console.error(" Database Connection Error:", err); });
//console.log(client) ; 
