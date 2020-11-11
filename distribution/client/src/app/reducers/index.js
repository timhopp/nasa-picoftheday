"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var redux_1 = require("redux");
var currentPhotoSlice_1 = __importDefault(require("./currentPhotoSlice"));
var favoriteSlice_1 = __importDefault(require("./favoriteSlice"));
//rootReducer combines all reducers into one to pass to the store.
//Export Rootstate, which will be used in selectors for strongly typed access to the Redux state.
var rootReducer = redux_1.combineReducers({
    currentPhoto: currentPhotoSlice_1["default"],
    favorites: favoriteSlice_1["default"]
});
exports["default"] = rootReducer;
