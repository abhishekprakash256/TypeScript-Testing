"use strict";
/*
the file to insert the data into the database
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
//import { DBHelper } from './crud_operartions';
//import { client } from './connector_sql';  // Import client to close after execution
// THE CONSTS
var DATA_BASE_NAME = 'contact';
var TABLE_NAME = 'contact.contacts';
var crud_operartions_1 = require("./crud_operartions");
var connector_sql_1 = require("./connector_sql");
// Inserting a new record
var newEntry = {
    first_name: 'Alice',
    last_name: 'Johnson',
    phone: '987654321',
    address: JSON.stringify({
        street: "456 Elm St",
        city: "Los Angeles",
        country: "USA"
    })
};
var bulkEntries = [
    {
        first_name: 'Alice',
        last_name: 'Johnson',
        phone: '987654321',
        address: JSON.stringify({
            street: "456 Elm St",
            city: "Los Angeles",
            country: "USA"
        })
    },
    {
        first_name: 'Bob',
        last_name: 'Smith',
        phone: '123456789',
        address: JSON.stringify({
            street: "789 Oak St",
            city: "New York",
            country: "USA"
        })
    },
    {
        first_name: 'Charlie',
        last_name: 'Brown',
        phone: '555888999',
        address: JSON.stringify({
            street: "321 Maple Ave",
            city: "Chicago",
            country: "USA"
        })
    }
];
var upsertEntry = {
    first_name: 'Alice',
    last_name: 'Williams',
    phone: '987654321',
    address: JSON.stringify({
        street: "456 Elm St",
        city: "Los Angeles",
        country: "USA"
    })
};
var searchCondition = "first_name = 'Charlie' AND phone = '555888999'";
// Create an instance of Helper_Fun
var dbHelper = new crud_operartions_1.Helper_Fun(connector_sql_1.client);
function test_fun() {
    return __awaiter(this, void 0, void 0, function () {
        var updatedEntry, paginatedUsers, totalUsers, userExists, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 12, 13, 15]);
                    //insert the one data
                    return [4 /*yield*/, dbHelper.add_value(TABLE_NAME, newEntry)];
                case 1:
                    //insert the one data
                    _a.sent();
                    //insert the data in bulk
                    return [4 /*yield*/, dbHelper.bulk_insert(TABLE_NAME, bulkEntries)];
                case 2:
                    //insert the data in bulk
                    _a.sent();
                    updatedEntry = { phone: '123456789' };
                    //update one value 
                    return [4 /*yield*/, dbHelper.update_value(TABLE_NAME, updatedEntry, 'id = 1')];
                case 3:
                    //update one value 
                    _a.sent();
                    //upsert the value
                    return [4 /*yield*/, dbHelper.upsert(TABLE_NAME, upsertEntry, "id")];
                case 4:
                    //upsert the value
                    _a.sent();
                    return [4 /*yield*/, dbHelper.fetch_paginated(TABLE_NAME, 5, 0)];
                case 5:
                    paginatedUsers = _a.sent();
                    console.log("Paginated Users:", paginatedUsers);
                    // Deleting a record
                    return [4 /*yield*/, dbHelper.delete_value(TABLE_NAME, 'id = 1')];
                case 6:
                    // Deleting a record
                    _a.sent();
                    return [4 /*yield*/, dbHelper.count_rows(TABLE_NAME)];
                case 7:
                    totalUsers = _a.sent();
                    console.log("Total Users: ".concat(totalUsers));
                    // Searching for a record
                    return [4 /*yield*/, dbHelper.search_value(TABLE_NAME, "first_name = 'Alice'")];
                case 8:
                    // Searching for a record
                    _a.sent();
                    return [4 /*yield*/, dbHelper.record_exists(TABLE_NAME, searchCondition)];
                case 9:
                    userExists = _a.sent();
                    console.log("User Exists:", userExists);
                    // Fetching all records
                    return [4 /*yield*/, dbHelper.get_all_values(TABLE_NAME)];
                case 10:
                    // Fetching all records
                    _a.sent();
                    // the function to delete all the values
                    return [4 /*yield*/, dbHelper.truncate_table(TABLE_NAME)];
                case 11:
                    // the function to delete all the values
                    _a.sent();
                    return [3 /*break*/, 15];
                case 12:
                    error_1 = _a.sent();
                    console.error("Error:", error_1);
                    return [3 /*break*/, 15];
                case 13: return [4 /*yield*/, dbHelper.closeConnection()];
                case 14:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 15: return [2 /*return*/];
            }
        });
    });
}
test_fun(); // Call the function
