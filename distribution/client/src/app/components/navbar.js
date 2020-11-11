"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var auth0_context_1 = require("../features/auth0/auth0-context");
function NavBar() {
    var _a = auth0_context_1.useAuth0(), isLoading = _a.isLoading, user = _a.user, loginWithRedirect = _a.loginWithRedirect, logout = _a.logout, isAuthenticated = _a.isAuthenticated;
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
// export default withRouter(Navbar);
exports["default"] = NavBar;
