"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var favoriteSlice_1 = require("../reducers/favoriteSlice");
var datePicker_1 = __importDefault(require("./datePicker"));
var favoriteCom_1 = __importDefault(require("./favoriteCom"));
var Favorites = /** @class */ (function (_super) {
    __extends(Favorites, _super);
    function Favorites(props) {
        return _super.call(this, props) || this;
    }
    Favorites.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "container-fluid" },
            react_1["default"].createElement("div", { className: "row justify-content-center" },
                react_1["default"].createElement("div", { className: "col" },
                    react_1["default"].createElement("button", { className: "btn btn-success", onClick: function () { return _this.props.addFavorite(_this.props.currentPhoto); } }, " Favorite")),
                react_1["default"].createElement("div", null,
                    " You have ",
                    this.props.favorites.length,
                    " favorites"),
                react_1["default"].createElement("div", { className: "col" },
                    react_1["default"].createElement("div", { className: "" }, "Date"),
                    react_1["default"].createElement(datePicker_1["default"], null))),
            react_1["default"].createElement("div", { className: "row justify-content-center" }, this.props.favorites.map(function (fav) { return (react_1["default"].createElement(favoriteCom_1["default"], { key: fav.title, fav: fav })); }))));
    };
    return Favorites;
}(react_1["default"].Component));
var mapStateToProps = function (state) {
    return {
        currentPhoto: state.currentPhoto.photo[0],
        favorites: state.favorites.favorites
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addFavorite: function (newFavorite) { return dispatch(favoriteSlice_1.addFavorite(newFavorite)); }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Favorites);
