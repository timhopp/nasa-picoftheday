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
var currentPhotoSlice_1 = require("../reducers/currentPhotoSlice");
var moment_1 = __importDefault(require("moment"));
var store_1 = __importDefault(require("../store"));
var photo_1 = require("./photo");
//You need to define the prop { photo } then state that the prop is a type Photo
var CurrentPhoto = /** @class */ (function (_super) {
    __extends(CurrentPhoto, _super);
    function CurrentPhoto(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentDate: "",
            today: ""
        };
        //The functions this needs to be bound to the this.state, otherwise the state won't be recognizable
        _this.fetchPrevious = _this.fetchPrevious.bind(_this);
        _this.fetchNext = _this.fetchNext.bind(_this);
        return _this;
    }
    //Need to add a way to check is date is future
    CurrentPhoto.prototype.fetchNext = function () {
        var checkedDate = "";
        if (this.state.currentDate === "") {
            var createCurrent = new Date();
            checkedDate = moment_1["default"](createCurrent).format("yyyy-MM-DD");
            this.setState({ currentDate: checkedDate });
            this.setState({ today: checkedDate });
        }
        else {
            checkedDate = this.state.currentDate;
        }
        var newDate = moment_1["default"](checkedDate).add(1, "days").format("yyyy-MM-DD");
        this.setState({ currentDate: newDate });
        console.log("hit", newDate);
        // store.dispatch(fetchPhotoByDate(newDate));
    };
    CurrentPhoto.prototype.fetchPrevious = function () {
        var checkedDate = "";
        if (this.state.currentDate === "") {
            var createCurrent = new Date();
            checkedDate = moment_1["default"](createCurrent).format("yyyy-MM-DD");
            this.setState({ currentDate: checkedDate });
            this.setState({ today: checkedDate });
        }
        else {
            checkedDate = this.state.currentDate;
        }
        var newDate = moment_1["default"](checkedDate).subtract(1, "days").format("yyyy-MM-DD");
        this.setState({ currentDate: newDate });
        console.log("hit", newDate);
        store_1["default"].dispatch(currentPhotoSlice_1.fetchPhotoByDate(newDate));
    };
    CurrentPhoto.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "container-fluid" },
            react_1["default"].createElement("div", { className: "row align-items-center" },
                react_1["default"].createElement("button", { className: "col btn btn-info ml-5", onClick: this.fetchPrevious }, "Previous"),
                react_1["default"].createElement("div", { className: "col-8" },
                    react_1["default"].createElement("h2", null, this.props.currentPhoto.title),
                    react_1["default"].createElement(photo_1.PhotoCom, null)),
                react_1["default"].createElement("button", { className: "col btn btn-info mr-5", onClick: this.fetchNext }, "Next"))));
    };
    return CurrentPhoto;
}(react_1["default"].Component));
var mapStateToProps = function (state) {
    console.log('map hit');
    return {
        currentPhoto: state.currentPhoto.photo,
        date: state.currentPhoto.date
    };
};
// const mapDispatchToProps = (dispatch: AppDispatch) => {
//   return {
//     fetchPhotoByDate: (date: string) => dispatch(fetchPhotoByDate(date))
//   }
// }
exports["default"] = react_redux_1.connect(mapStateToProps)(CurrentPhoto);
