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
//The prop needs to be passed in, then also compared (need to know why it can't be just the right object though)
var Favorite = /** @class */ (function (_super) {
    __extends(Favorite, _super);
    function Favorite(props) {
        return _super.call(this, props) || this;
    }
    Favorite.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "", onClick: function () { return _this.props.currentFavorite(_this.props.fav); } },
            react_1["default"].createElement("div", { className: "" }, this.props.fav.title),
            react_1["default"].createElement("div", { className: "row justify-content-center" },
                react_1["default"].createElement("img", { className: "favimg pt-2 pb-2", src: this.props.fav.url, alt: "Image Not Available" })),
            react_1["default"].createElement("button", { className: "btn btn-danger m-2", onClick: function () { return _this.props.removeFavorite(_this.props.fav); } }, "Remove")));
    };
    return Favorite;
}(react_1["default"].Component));
var mapDispatchToProps = function (dispatch) {
    return {
        // deleteFavorite: (fav: Photo) => dispatch(deleteFavorite(fav)),
        removeFavorite: function (fav) { return dispatch(favoriteSlice_1.removeFavorite(fav._id)); },
        currentFavorite: function (fav) { return dispatch(favoriteSlice_1.setCurrentFavorite(fav)); }
    };
};
exports["default"] = react_redux_1.connect(null, mapDispatchToProps)(Favorite);
