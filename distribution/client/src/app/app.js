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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
require("./app.css");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var currentPhotoSlice_1 = require("../app/reducers/currentPhotoSlice");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var currentPhoto_1 = __importDefault(require("../app/components/currentPhoto"));
var favorites_1 = __importDefault(require("../app/components/favorites"));
require("bootstrap/dist/css/bootstrap.min.css");
var middlewareEnhancer = redux_1.applyMiddleware(redux_thunk_1["default"]);
var composedEnhancers = redux_1.compose(middlewareEnhancer);
var AppWrapper = function () {
    // const store = createStore(rootReducer, undefined, composedEnhancers);
    return (react_1["default"].createElement(App, null));
};
var App = function () {
    //Why should I use useDispatch here instead of AppDispatch? What exactly is the difference for Typescript? 
    var dispatch = react_redux_1.useDispatch();
    //Need to export RootState and set state type to RootState to access reducers
    var photoStatus = react_redux_1.useSelector(function (state) { return state.currentPhoto.status; });
    // const error : string | null | undefined = useSelector((state: RootState) => state.currentPhoto.error)
    var photo = react_redux_1.useSelector(function (state) { return state.currentPhoto.photo; });
    react_1.useEffect(function () {
        if (photoStatus == 'idle')
            dispatch(currentPhotoSlice_1.fetchCurrentPhoto);
        // dispatch(fetchFavorites())
        //Adding the empty array as a second argument ensures it only is called once.
    }, []);
    // let content 
    // if(photoStatus === 'loading'){
    //    content =
    //   <div>
    //   <h1>NASA Picture of The Day</h1>
    //   <p> Loading</p>
    //    </div>
    // } else if (photoStatus === 'succeeded') {
    //    content = 
    //    <div>
    //    </div>
    // } else if (photoStatus === 'failed') {
    //    content = 
    //    <div>
    //        <h1>NASA Picture of The Day</h1>
    //      {error}</div> 
    //  }
    var content;
    if (photoStatus === "succeeded") {
        content =
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(currentPhoto_1["default"], null));
    }
    else {
        content =
            react_1["default"].createElement("div", null, "loading");
    }
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" }),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", null, "NASA Picture of The Day"),
                content),
            react_1["default"].createElement(favorites_1["default"], null))));
};
exports["default"] = AppWrapper;
