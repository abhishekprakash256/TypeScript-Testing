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
var crud_operartions_1 = require("./crud_operartions");
var connector_sql_1 = require("./connector_sql"); // Import client to close after execution
// THE CONSTS
var DATA_BASE_NAME = 'contact';
var TABLE_NAME = 'contact.contacts';
// Dummy data
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
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, updatedEntry, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, 7, 9]);
                //tested
                return [4 /*yield*/, crud_operartions_1.DBHelper.add_value(TABLE_NAME, entry)];
            case 1:
                //tested
                _a.sent(); // add the data into the database 
                return [4 /*yield*/, crud_operartions_1.DBHelper.get_all_values(TABLE_NAME)];
            case 2:
                data = _a.sent();
                console.log("Fetched Data:", data);
                updatedEntry = { phone: '123456789' };
                return [4 /*yield*/, crud_operartions_1.DBHelper.update_value(TABLE_NAME, updatedEntry, 'id = 1')];
            case 3:
                _a.sent();
                // Deleting a record
                return [4 /*yield*/, crud_operartions_1.DBHelper.delete_value(TABLE_NAME, 'id = 1')];
            case 4:
                // Deleting a record
                _a.sent();
                // Searching for a record
                return [4 /*yield*/, crud_operartions_1.DBHelper.search_value(TABLE_NAME, "first_name = 'Alice'")];
            case 5:
                // Searching for a record
                _a.sent();
                return [3 /*break*/, 9];
            case 6:
                error_1 = _a.sent();
                console.error("Error:", error_1);
                return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, connector_sql_1.client.end()];
            case 8:
                _a.sent(); // Close the database connection
                console.log("Database connection closed");
                process.exit(0); // Force exit after execution
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/];
        }
    });
}); })();
