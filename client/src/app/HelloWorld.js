"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.HelloWorld = void 0;
var react_1 = __importDefault(require("react"));
exports.HelloWorld = function (props) { return <h1>Hi there from React! Welcome {props.firstName} and {props.lastName}!</h1>; };
