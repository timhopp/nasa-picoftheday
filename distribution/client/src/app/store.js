"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
// import { useDispatch } from "react-redux";
var index_1 = __importDefault(require("../app/reducers/index"));
var store = toolkit_1.configureStore({
    reducer: index_1["default"]
});
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept("../app/reducers/index", function () {
        var newRootReducer = require("../app/reducers/index")["default"];
        store.replaceReducer(newRootReducer);
    });
}
//Note -- Do I need this? Why ?
// export const useAppDispatch = () => useDispatch<AppDispatch>();
exports["default"] = store;
