"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.PhotoCom = void 0;
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
exports.PhotoCom = function () {
    var photo = react_redux_1.useSelector(function (state) { return state.currentPhoto.photo; });
    var status = react_redux_1.useSelector(function (state) { return state.currentPhoto.status; });
    react_1.useEffect(function () {
        if (status == 'loading') {
            console.log('hit use effect');
        }
    }, [status]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", { className: "mt-2" }, photo[0].title),
        react_1["default"].createElement("div", { className: "row justify-content-center" },
            react_1["default"].createElement("img", { className: "img mb-5", src: photo[0].url, alt: "Image Not Available" })),
        react_1["default"].createElement("p", { className: "mt-3" }, photo[0].explanation),
        react_1["default"].createElement("p", null,
            "status ",
            status)));
};
