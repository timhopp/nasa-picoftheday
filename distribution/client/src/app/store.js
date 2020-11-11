"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var index_1 = __importDefault(require("../app/reducers/index"));
//CongfigureStore has predefined middleware, enabling asyncthunk to work without specifying it here
var store = toolkit_1.configureStore({
    reducer: index_1["default"]
});
exports["default"] = store;
