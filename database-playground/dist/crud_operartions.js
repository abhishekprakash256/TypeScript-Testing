"use strict";
// the file to get make the crud operations in postgresql 
Object.defineProperty(exports, "__esModule", { value: true });
var connector_sql_1 = require("./connector_sql"); // import the clinedt
// Make sure 'client' is passed to the constructor
var Helper_Fun = /** @class */ (function () {
    function Helper_Fun(client) {
        this.client = client;
    }
    Helper_Fun.prototype.add_value = function () {
        /*
        The function to add the value in sql
        */
    };
    Helper_Fun.prototype.update_value = function () {
        /*
        the fucnttion to update the value in sql
        */
    };
    Helper_Fun.prototype.delete_value = function () {
        /*
        The function to delete the value in the sql
        */
    };
    Helper_Fun.prototype.search_value = function () {
        /*
        The function to search the value in the sql
        */
    };
    return Helper_Fun;
}());
// Make the helper function and pass 'client' to the constructor
var helper_fun = new Helper_Fun(connector_sql_1.client);
console.log(helper_fun.client);
