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
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var auth0_context_1 = require("../features/auth0/auth0-context");
var favoriteSlice_1 = require("../reducers/favoriteSlice");
function NavBar() {
    var _a = auth0_context_1.useAuth0(), isLoading = _a.isLoading, user = _a.user, loginWithRedirect = _a.loginWithRedirect, logout = _a.logout, isAuthenticated = _a.isAuthenticated;
    var dispatch = react_redux_1.useDispatch();
    var stateUser = react_redux_1.useSelector(function (state) { return state.favorites.user; });
    react_1.useEffect(function () {
        if (!user)
            dispatch(favoriteSlice_1.loginChange());
    }, [stateUser]);
    return (react_1["default"].createElement("header", null,
        react_1["default"].createElement("div", { className: "container-fluid no-side-padding" },
            react_1["default"].createElement("ul", { className: "main-menu visible-on-click row justify-content-right", id: "main-menu" },
                react_1["default"].createElement("div", { className: "col-10" }),
                react_1["default"].createElement("div", { className: 'col' },
                    react_1["default"].createElement(react_router_dom_1.Link, { className: "nav-link", to: "/" },
                        !isLoading && !user && (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("button", { className: "btn btn-success mt-1", onClick: loginWithRedirect }, "Sign In"))),
                        !isLoading && user && (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("button", { className: "btn btn-danger", onClick: function () { logout({ returnTo: window.location.origin }); } }, "Sign Out"))))))))));
}
exports["default"] = NavBar;
