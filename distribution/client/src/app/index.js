"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var app_1 = __importDefault(require("./app"));
var react_redux_1 = require("react-redux");
var store_1 = __importDefault(require("../app/store"));
var auth0_context_1 = require("../app/features/auth0/auth0-context");
var react_router_dom_1 = require("react-router-dom");
//Provider wraps App so it can access Redux store
//Auth0 Provider wraps App for Auth0 access
function render() {
    react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store_1["default"] },
        react_1["default"].createElement(auth0_context_1.Auth0Provider, null,
            react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                react_1["default"].createElement(app_1["default"], null)))), document.getElementById('root'));
}
render();
