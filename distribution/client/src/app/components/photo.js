"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PhotoCom = void 0;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
exports.PhotoCom = function () {
    var photo = react_redux_1.useSelector(function (state) { return state.currentPhoto.photo; });
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h4", { className: "mt-2" }, photo.title),
        react_1["default"].createElement("div", { className: "row justify-content-center" },
            react_1["default"].createElement("img", { className: "img mb-2", src: photo.url, alt: "Image Not Available" })),
        react_1["default"].createElement("p", { className: "mt-3" }, photo.explanation)));
};
