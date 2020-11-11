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
//Need to define the prop { photo } then state that the prop is a type Photo
var CurrentPhoto = /** @class */ (function (_super) {
    __extends(CurrentPhoto, _super);
    function CurrentPhoto(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentDate: "",
            today: ""
        },
            //The functions this needs to be bound to the this.state, otherwise the state won't be recognizable
            _this.fetchPrevious = _this.fetchPrevious.bind(_this);
        _this.fetchNext = _this.fetchNext.bind(_this);
        return _this;
    }
    CurrentPhoto.prototype.fetchNext = function () {
        var checkedDate = "";
        var todayFormatted = "";
        if (this.props.date === "") {
            var createCurrent = new Date();
            var today = new Date();
            todayFormatted = moment_1["default"](today).format("yyyy-MM-DD");
            checkedDate = moment_1["default"](createCurrent).format("yyyy-MM-DD");
            store_1["default"].dispatch(currentPhotoSlice_1.setDate(checkedDate));
            store_1["default"].dispatch(currentPhotoSlice_1.setToday(todayFormatted));
        }
        else {
            checkedDate = this.props.date;
        }
        var newDate = moment_1["default"](checkedDate).add(1, "days").format("yyyy-MM-DD");
        //The store today does not come back in time if initially being set, but the todayFomatted is only set if(this.props.date === "") runs. So it needs to determine which is which to ensure today isn't ""
        var todayCurrent = '';
        if (this.props.today === "") {
            todayCurrent = todayFormatted;
        }
        else {
            todayCurrent = this.props.today;
        }
        if (moment_1["default"](newDate).isAfter(todayCurrent)) {
            alert('Cant Pick a Date in The Future');
        }
        else {
            store_1["default"].dispatch(currentPhotoSlice_1.setDate(newDate));
            console.log("hit", newDate);
            store_1["default"].dispatch(currentPhotoSlice_1.fetchPhotoByDate(newDate));
        }
    };
    CurrentPhoto.prototype.fetchPrevious = function () {
        var checkedDate = "";
        var todayFormatted = "";
        if (this.props.date === "") {
            var createCurrent = new Date();
            var today = new Date();
            todayFormatted = moment_1["default"](today).format("yyyy-MM-DD");
            checkedDate = moment_1["default"](createCurrent).format("yyyy-MM-DD");
            store_1["default"].dispatch(currentPhotoSlice_1.setDate(checkedDate));
            store_1["default"].dispatch(currentPhotoSlice_1.setToday(todayFormatted));
        }
        else {
            checkedDate = this.props.date;
        }
        var newDate = moment_1["default"](checkedDate).subtract(1, "days").format("yyyy-MM-DD");
        console.log("hit", newDate);
        store_1["default"].dispatch(currentPhotoSlice_1.setDate(newDate));
        store_1["default"].dispatch(currentPhotoSlice_1.fetchPhotoByDate(newDate));
    };
    CurrentPhoto.prototype.checkState = function () {
        console.log('state set', this.state.currentDate);
    };
    CurrentPhoto.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "container-fluid" },
            react_1["default"].createElement("div", { className: "row align-items-center" },
                react_1["default"].createElement("button", { className: "col btn btn-info ml-3", onClick: this.fetchPrevious }, "Previous"),
                react_1["default"].createElement("div", { className: "col-10" },
                    react_1["default"].createElement(photo_1.PhotoCom, null)),
                react_1["default"].createElement("button", { className: "col btn btn-info mr-3", onClick: this.fetchNext }, "Next"))));
    };
    return CurrentPhoto;
}(react_1["default"].Component));
var mapStateToProps = function (state) {
    console.log('map hit');
    return {
        date: state.currentPhoto.date,
        today: state.currentPhoto.today
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps)(CurrentPhoto);
