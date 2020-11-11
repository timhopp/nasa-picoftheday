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
var react_redux_1 = require("react-redux");
var currentPhotoSlice_1 = require("../app/reducers/currentPhotoSlice");
var favoriteSlice_1 = require("../app/reducers/favoriteSlice");
var currentPhoto_1 = __importDefault(require("../app/components/currentPhoto"));
var favorites_1 = __importDefault(require("../app/components/favorites"));
require("bootstrap/dist/css/bootstrap.min.css");
var navbar_1 = __importDefault(require("../app/components/navbar"));
//App doesn't need to be wrapped here as it already is being wrapped by provider in Index.tsx. If wrapped in two places Redux store won't function right.
function App() {
    //Why should I use useDispatch here instead of AppDispatch? What exactly is the difference for Typescript? 
    var dispatch = react_redux_1.useDispatch();
    //Need to export RootState and set state type to RootState to access reducers
    var photoStatus = react_redux_1.useSelector(function (state) { return state.currentPhoto.status; });
    var error = react_redux_1.useSelector(function (state) { return state.currentPhoto.error; });
    var userLoaded = react_redux_1.useSelector(function (state) { return state.favorites.userLoaded; });
    var user = react_redux_1.useSelector(function (state) { return state.favorites.user; });
    react_1.useEffect(function () {
        if (photoStatus == 'idle')
            dispatch(currentPhotoSlice_1.fetchCurrentPhoto());
        // Adding the empty array as a second argument ensures it only is called once.
    }, []);
    react_1.useEffect(function () {
        if (userLoaded === true)
            dispatch(favoriteSlice_1.fetchFavorites(user));
        console.log('useEffect hit?');
        //Watches userLoaded and runs if changed
    }, [userLoaded]);
    var content;
    if (photoStatus === 'loading') {
        content =
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", null, " Loading"));
    }
    else if (photoStatus === 'succeeded' && userLoaded === true) {
        content =
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(currentPhoto_1["default"], null),
                react_1["default"].createElement(favorites_1["default"], null));
    }
    else if (photoStatus === 'succeeded' && userLoaded === false) {
        content =
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(currentPhoto_1["default"], null),
                react_1["default"].createElement("div", null, "To Access Your Favorites Please Log In"));
    }
    else if (photoStatus === 'failed') {
        content =
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h3", null,
                    " ",
                    error),
                react_1["default"].createElement("h5", null, "Select A Date isn't in The Future "));
    }
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(navbar_1["default"], null),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h2", { className: "pt-2" }, "NASA Picture of The Day"),
            content)));
}
exports["default"] = App;
