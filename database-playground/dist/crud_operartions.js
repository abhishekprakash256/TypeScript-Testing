"use strict";
// the file to get make the crud operations in postgresql 
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var connector_sql_1 = require("./connector_sql"); // import the clinedt
//import { setupDatabase } from './create_db_schema' ; 
//THE CONSTS
var DATA_BASE_NAME = 'contact';
var TABLE_NAME = 'contact.contacts';
//run the setupdatabase
//setupDatabase();
// Make sure 'client' is passed to the constructor
var Helper_Fun = /** @class */ (function () {
    function Helper_Fun(client) {
        this.client = client;
    }
    Helper_Fun.prototype.add_value = function (database_name, table_name, entry) {
        return __awaiter(this, void 0, void 0, function () {
            var columns, values, placeholders, query, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 6]);
                        // Connect to the specified database
                        return [4 /*yield*/, this.client.connect()];
                    case 1:
                        // Connect to the specified database
                        _a.sent();
                        console.log("Connected to database: ".concat(database_name));
                        columns = Object.keys(entry).join(", ");
                        values = Object.values(entry);
                        placeholders = values.map(function (_, i) { return "$".concat(i + 1); }).join(", ");
                        query = "INSERT INTO ".concat(table_name, " (").concat(columns, ") VALUES (").concat(placeholders, ")");
                        // Execute the insert query
                        return [4 /*yield*/, this.client.query(query, values)];
                    case 2:
                        // Execute the insert query
                        _a.sent();
                        console.log("Value inserted successfully");
                        return [3 /*break*/, 6];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Error during inserting value:", error_1);
                        return [3 /*break*/, 6];
                    case 4: 
                    // Disconnect from the database
                    return [4 /*yield*/, this.client.end()];
                    case 5:
                        // Disconnect from the database
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
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
//console.log(helper_fun.client );
//test the database addtion of the data 
//dummy data
var entry = {
    first_name: 'Alice',
    last_name: 'Johnson',
    phone: '987654321',
    address: JSON.stringify({
        street: "456 Elm St",
        city: "Los Angeles",
        country: "USA"
    }) // Convert JSON object to string for JSONB column
};
helper_fun.add_value(DATA_BASE_NAME, TABLE_NAME, entry);
