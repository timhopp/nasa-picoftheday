"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
function CurrentFav() {
    var photo = react_redux_1.useSelector(function (state) { return state.favorites.currentFavorite[0]; });
    return (react_1["default"].createElement("div", { className: "modal", id: "exampleModal", role: "dialog" },
        react_1["default"].createElement("div", { className: "modal-dialog", role: "document" },
            react_1["default"].createElement("div", { className: "modal-content" },
                react_1["default"].createElement("div", { className: "modal-header" },
                    react_1["default"].createElement("h5", { className: "modal-title" }, "Current Favorite"),
                    react_1["default"].createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                        react_1["default"].createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
                react_1["default"].createElement("div", { className: "modal-body" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h2", { className: "mt-2" }, photo.title),
                        react_1["default"].createElement("div", { className: "row justify-content-center" },
                            react_1["default"].createElement("img", { className: "img mb-5", src: photo.url, alt: "Image Not Available" })),
                        react_1["default"].createElement("p", { className: "mt-3" }, photo.explanation))),
                react_1["default"].createElement("div", { className: "modal-footer" },
                    react_1["default"].createElement("button", { type: "button", className: "btn btn-primary" }, "Save changes"),
                    react_1["default"].createElement("button", { type: "button", className: "btn btn-secondary", "data-dismiss": "modal" }, "Close"))))));
}
exports["default"] = CurrentFav;
