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
var react_bootstrap_1 = require("react-bootstrap");
require("../app.css");
var Favorites = /** @class */ (function (_super) {
    __extends(Favorites, _super);
    function Favorites(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false
        };
        _this.handleShow = _this.handleShow.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }
    Favorites.prototype.handleShow = function () { this.setState({ show: true }); };
    Favorites.prototype.handleClose = function () { this.setState({ show: false }); };
    Favorites.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "container-fluid" },
                react_1["default"].createElement("div", { className: "row justify-content-center" },
                    react_1["default"].createElement("div", { className: "col" },
                        react_1["default"].createElement("button", { className: "btn btn-success", onClick: function () { return _this.props.addFavorite(_this.props.currentPhoto); } }, "Add To Favorites")),
                    react_1["default"].createElement("div", { className: "col" },
                        react_1["default"].createElement("h5", { className: "" }, "Date"),
                        react_1["default"].createElement(datePicker_1["default"], null))),
                react_1["default"].createElement("div", { className: "container-fluid" },
                    react_1["default"].createElement("div", { className: "row justify-content-center" },
                        react_1["default"].createElement("h5", null, "Favorites")),
                    react_1["default"].createElement("div", { className: "row justify-content-center" }, this.props.favorites.map(function (fav) { return (react_1["default"].createElement("div", { className: "col-2 bg-info m-3 rounded", key: fav._id, onClick: _this.handleShow },
                        react_1["default"].createElement(favoriteCom_1["default"], { key: fav.title, fav: fav }))); })))),
            this.props.currentFav ?
                react_1["default"].createElement(react_bootstrap_1.Modal, { show: this.state.show, size: "lg", onHide: this.handleClose },
                    react_1["default"].createElement(react_bootstrap_1.Modal.Body, { className: "bg-dark" },
                        react_1["default"].createElement("div", { className: "container-fluid" },
                            react_1["default"].createElement("div", { className: "row justify-content-center text-white" },
                                react_1["default"].createElement("h2", null, this.props.currentFav.title),
                                react_1["default"].createElement("img", { className: "img mb-5", src: this.props.currentFav.url, alt: "Image Not Available" }),
                                react_1["default"].createElement("p", { className: "ml-4 mr-4" }, this.props.currentFav.explanation),
                                react_1["default"].createElement("button", { className: "btn btn-danger mr-3", onClick: function () { _this.props.removeFavorite(_this.props.currentFav); _this.handleClose(); } }, "Remove"),
                                react_1["default"].createElement("button", { className: "btn btn-danger ml-3", onClick: this.handleClose }, "Close")))))
                : null));
    };
    return Favorites;
}(react_1["default"].Component));
var mapStateToProps = function (state) {
    return {
        currentPhoto: state.currentPhoto.photo,
        favorites: state.favorites.favorites,
        currentFav: state.favorites.currentFavorite[0]
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addFavorite: function (newFavorite) { return dispatch(favoriteSlice_1.addFavorite(newFavorite)); },
        removeFavorite: function (fav) { return dispatch(favoriteSlice_1.removeFavorite(fav._id)); }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Favorites);
