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
exports.Helper_Fun = void 0;
//import { client } from './connector_sql';  // import the clinedt
//import { setupDatabase } from './create_db_schema' ; 
// Make sure 'client' is passed to the constructor
var Helper_Fun = /** @class */ (function () {
    function Helper_Fun(client) {
        this.client = client;
    }
    // Method to insert data into a table
    Helper_Fun.prototype.add_value = function (table_name, entry) {
        return __awaiter(this, void 0, void 0, function () {
            var columns, values, placeholders, query, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Inserting into table: ".concat(table_name));
                        columns = Object.keys(entry).join(", ");
                        values = Object.values(entry);
                        placeholders = values.map(function (_, i) { return "$".concat(i + 1); }).join(", ");
                        query = "INSERT INTO ".concat(table_name, " (").concat(columns, ") VALUES (").concat(placeholders, ")");
                        return [4 /*yield*/, this.client.query(query, values)];
                    case 1:
                        _a.sent();
                        console.log("Value inserted successfully");
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(" Error inserting value:", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Fetch Data and Close Connection
    Helper_Fun.prototype.get_all_values = function (table_name) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Fetching all values from table: ".concat(table_name));
                        query = "SELECT * FROM ".concat(table_name);
                        return [4 /*yield*/, this.client.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log("Retrieved Data:", result.rows);
                        return [2 /*return*/, result.rows];
                    case 2:
                        error_2 = _a.sent();
                        console.error("Error retrieving data:", error_2);
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Method to update an existing value in a table
    Helper_Fun.prototype.update_value = function (table_name, entry, condition) {
        return __awaiter(this, void 0, void 0, function () {
            var columns, values, setClause, query, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Updating value in table: ".concat(table_name));
                        columns = Object.keys(entry);
                        values = Object.values(entry);
                        setClause = columns.map(function (col, index) { return "".concat(col, " = $").concat(index + 1); }).join(", ");
                        query = "UPDATE ".concat(table_name, " SET ").concat(setClause, " WHERE ").concat(condition);
                        return [4 /*yield*/, this.client.query(query, values)];
                    case 1:
                        _a.sent();
                        console.log("Value updated successfully");
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.error("Error updating value:", error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Method to delete a value from a table
    Helper_Fun.prototype.delete_value = function (table_name, condition) {
        return __awaiter(this, void 0, void 0, function () {
            var query, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Deleting value from table: ".concat(table_name));
                        query = "DELETE FROM ".concat(table_name, " WHERE ").concat(condition);
                        return [4 /*yield*/, this.client.query(query)];
                    case 1:
                        _a.sent();
                        console.log("Value deleted successfully");
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.error("Error deleting value:", error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Method to search for a specific value in a table based on a condition
    Helper_Fun.prototype.search_value = function (table_name, search_condition) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Searching value in table: ".concat(table_name));
                        query = "SELECT * FROM ".concat(table_name, " WHERE ").concat(search_condition);
                        return [4 /*yield*/, this.client.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log("Search results:", result.rows);
                        return [2 /*return*/, result.rows];
                    case 2:
                        error_5 = _a.sent();
                        console.error("Error searching value:", error_5);
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Helper_Fun.prototype.bulk_insert = function (table_name, entries) {
        return __awaiter(this, void 0, void 0, function () {
            var keys_1, columns, values, flattenedValues, query, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Bulk inserting into ".concat(table_name));
                        keys_1 = Object.keys(entries[0]);
                        columns = keys_1.join(", ");
                        values = entries
                            .map(function (entry, i) { return "(".concat(keys_1.map(function (_, j) { return "$".concat(i * keys_1.length + j + 1); }).join(", "), ")"); })
                            .join(", ");
                        flattenedValues = entries.flatMap(Object.values);
                        query = "INSERT INTO ".concat(table_name, " (").concat(columns, ") VALUES ").concat(values, " RETURNING *");
                        return [4 /*yield*/, this.client.query(query, flattenedValues)];
                    case 1:
                        result = _a.sent();
                        console.log("Bulk insert successful:", result.rows);
                        return [2 /*return*/, result.rows];
                    case 2:
                        error_6 = _a.sent();
                        console.error("Error in bulk insert:", error_6);
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Helper_Fun.prototype.fetch_paginated = function (table_name, limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Fetching paginated data from ".concat(table_name));
                        query = "SELECT * FROM ".concat(table_name, " LIMIT $1 OFFSET $2");
                        return [4 /*yield*/, this.client.query(query, [limit, offset])];
                    case 1:
                        result = _a.sent();
                        console.log("Paginated Data:", result.rows);
                        return [2 /*return*/, result.rows];
                    case 2:
                        error_7 = _a.sent();
                        console.error("Error fetching paginated data:", error_7);
                        throw error_7;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Helper_Fun.prototype.count_rows = function (table_name) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "SELECT COUNT(*) FROM ".concat(table_name);
                        return [4 /*yield*/, this.client.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log("Total Rows in ".concat(table_name, ":"), result.rows[0].count);
                        return [2 /*return*/, result.rows[0].count];
                    case 2:
                        error_8 = _a.sent();
                        console.error("Error counting rows:", error_8);
                        throw error_8;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Helper_Fun.prototype.record_exists = function (table_name, condition) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "SELECT EXISTS (SELECT 1 FROM ".concat(table_name, " WHERE ").concat(condition, ")");
                        return [4 /*yield*/, this.client.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log("Record Exists?", result.rows[0].exists);
                        return [2 /*return*/, result.rows[0].exists];
                    case 2:
                        error_9 = _a.sent();
                        console.error(" Error checking record existence:", error_9);
                        throw error_9;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Helper_Fun.prototype.upsert = function (table_name, entry, unique_column) {
        return __awaiter(this, void 0, void 0, function () {
            var columns, values, placeholders, updates, query, result, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Upserting into ".concat(table_name));
                        columns = Object.keys(entry);
                        values = Object.values(entry);
                        placeholders = values.map(function (_, i) { return "$".concat(i + 1); }).join(", ");
                        updates = columns.map(function (col) { return "".concat(col, " = EXCLUDED.").concat(col); }).join(", ");
                        query = "\n          INSERT INTO ".concat(table_name, " (").concat(columns.join(", "), ") \n          VALUES (").concat(placeholders, ") \n          ON CONFLICT (").concat(unique_column, ") \n          DO UPDATE SET ").concat(updates, " RETURNING *");
                        return [4 /*yield*/, this.client.query(query, values)];
                    case 1:
                        result = _a.sent();
                        console.log("Upsert successful:", result.rows[0]);
                        return [2 /*return*/, result.rows[0]];
                    case 2:
                        error_10 = _a.sent();
                        console.error("Error in upsert:", error_10);
                        throw error_10;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Helper_Fun.prototype.truncate_table = function (table_name) {
        return __awaiter(this, void 0, void 0, function () {
            var query, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "TRUNCATE TABLE ".concat(table_name, " RESTART IDENTITY CASCADE");
                        // Execute the query
                        return [4 /*yield*/, this.client.query(query)];
                    case 1:
                        // Execute the query
                        _a.sent();
                        console.log("Table truncated and all records deleted from: ".concat(table_name));
                        return [3 /*break*/, 3];
                    case 2:
                        error_11 = _a.sent();
                        console.error("Error truncating the table:", error_11);
                        throw error_11;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Helper_Fun.prototype.closeConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.client.end()];
                    case 1:
                        _a.sent();
                        console.log("Database connection closed");
                        return [3 /*break*/, 3];
                    case 2:
                        error_12 = _a.sent();
                        console.error("Error closing connection:", error_12);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Helper_Fun;
}());
exports.Helper_Fun = Helper_Fun;
