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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Auth0Provider = exports.useAuth0 = exports.Auth0Context = void 0;
var react_1 = __importStar(require("react"));
var auth0_spa_js_1 = __importDefault(require("@auth0/auth0-spa-js"));
var auth0_spa_js_2 = __importDefault(require("@auth0/auth0-spa-js"));
var store_1 = __importDefault(require("../../store"));
var favoriteSlice_1 = require("../../reducers/favoriteSlice");
// create the context
exports.Auth0Context = react_1.createContext(null);
exports.useAuth0 = function () { return react_1.useContext(exports.Auth0Context); };
var Auth0Provider = /** @class */ (function (_super) {
    __extends(Auth0Provider, _super);
    function Auth0Provider(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            domain: "hoppdebopp.us.auth0.com",
            // `${process.env.REACT_APP_AUTH0_DOMAIN}`,
            client_id: '2ThBp8M64bv0Cqsr3E7G3yNxmMT8Vf2q',
            // `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
            redirect_uri: window.location.origin
        };
        // initialize the auth0 library
        _this.initializeAuth0 = function () { return __awaiter(_this, void 0, void 0, function () {
            var auth0Client, isAuthenticated, user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, auth0_spa_js_1["default"](this.config)];
                    case 1:
                        auth0Client = _b.sent();
                        this.setState({ auth0Client: auth0Client });
                        // check to see if they have been redirected after login
                        if (window.location.search.includes('code=')) {
                            return [2 /*return*/, this.handleRedirectCallback()];
                        }
                        return [4 /*yield*/, auth0Client.isAuthenticated()];
                    case 2:
                        isAuthenticated = _b.sent();
                        if (!isAuthenticated) return [3 /*break*/, 4];
                        return [4 /*yield*/, auth0Client.getUser()];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = null;
                        _b.label = 5;
                    case 5:
                        user = _a;
                        this.setState({ isLoading: false, isAuthenticated: isAuthenticated, user: user });
                        store_1["default"].dispatch(favoriteSlice_1.setUser(user));
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleRedirectCallback = function () { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ isLoading: true });
                        return [4 /*yield*/, this.state.auth0Client.handleRedirectCallback()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.state.auth0Client.getUser()];
                    case 2:
                        user = _a.sent();
                        this.setState({ user: user, isAuthenticated: true, isLoading: false });
                        window.history.replaceState({}, document.title, window.location.pathname);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.state = {
            isLoading: true,
            isAuthenticated: false,
            user: null,
            auth0Client: auth0_spa_js_2["default"]
        };
        return _this;
    }
    Auth0Provider.prototype.componentDidMount = function () {
        this.initializeAuth0();
    };
    Auth0Provider.prototype.render = function () {
        var _a = this.state, auth0Client = _a.auth0Client, isLoading = _a.isLoading, isAuthenticated = _a.isAuthenticated, user = _a.user;
        var children = this.props.children;
        var configObject = {
            isLoading: isLoading,
            isAuthenticated: isAuthenticated,
            user: user,
            loginWithRedirect: function () {
                var p = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    p[_i] = arguments[_i];
                }
                return auth0Client.loginWithRedirect.apply(auth0Client, p);
            },
            getTokenSilently: function () {
                var p = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    p[_i] = arguments[_i];
                }
                return auth0Client.getTokenSilently.apply(auth0Client, p);
            },
            getIdTokenClaims: function () {
                var p = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    p[_i] = arguments[_i];
                }
                return auth0Client.getIdTokenClaims.apply(auth0Client, p);
            },
            logout: function () {
                var p = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    p[_i] = arguments[_i];
                }
                return auth0Client.logout.apply(auth0Client, p);
            }
        };
        return react_1["default"].createElement(exports.Auth0Context.Provider, { value: configObject }, children);
    };
    return Auth0Provider;
}(react_1.Component));
exports.Auth0Provider = Auth0Provider;
