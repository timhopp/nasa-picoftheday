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
var store_1 = __importDefault(require("../store"));
var react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var currentPhotoSlice_1 = require("../reducers/currentPhotoSlice");
var moment_1 = __importDefault(require("moment"));
//{} type is required to create new Date() in state
var DateSelector = /** @class */ (function (_super) {
    __extends(DateSelector, _super);
    function DateSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            startDate: new Date()
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    DateSelector.prototype.handleChange = function (date) {
        var formattedDate = moment_1["default"](date).format("yyyy-MM-DD");
        console.log('date is here!', formattedDate);
        store_1["default"].dispatch(currentPhotoSlice_1.setDate(formattedDate));
        store_1["default"].dispatch(currentPhotoSlice_1.fetchPhotoByDate(formattedDate));
        this.setState({
            startDate: date
        });
        // this.props.changePhoto(date);
    };
    DateSelector.prototype.render = function () {
        var startDate = this.state.startDate;
        return (react_1["default"].createElement(react_datepicker_1["default"], { className: "m-1", dateFormat: "yyyy/MM/dd", selected: startDate, onChange: this.handleChange, showYearDropdown: true }));
    };
    return DateSelector;
}(react_1["default"].Component));
exports["default"] = DateSelector;
;
// const mapDispatchToProps = (dispatch: AppDispatch) => {
//   return {
//   }
// }
// const mapStateToProps = (state: RootState) => {
//   return {
//   }
// }
// const mapDispatchToProps = ( dispatch: AppDispatch) => {
//   return {
// }}
// export default connect()(DateSelector);
