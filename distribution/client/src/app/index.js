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
function render() {
    // const App = require('./App').default
    react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store_1["default"] },
        react_1["default"].createElement(app_1["default"], null)), document.getElementById('root'));
}
render();
// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./App', render)
// }
