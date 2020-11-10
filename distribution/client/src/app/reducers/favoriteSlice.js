"use strict";
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
exports.setCurrentFavorite = exports.removeFavorite = exports.addFavorite = exports.fetchFavorites = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var axios_1 = __importDefault(require("axios"));
// interface Duplicate {
//   duplicate: number
// }
//Does this simply ensure an empy array is only Photo types? 
var initialState = {
    favorites: [],
    currentFavorite: [],
    status: 'idle',
    error: null
};
var base = window.location.host.includes("localhost") ? "//localhost:3000/" : "/";
var api = axios_1["default"].create({
    baseURL: base,
    timeout: 3000
});
exports.fetchFavorites = toolkit_1.createAsyncThunk("reducers/fetchFavorites", function () { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api.get("favorites")];
            case 1:
                response = _a.sent();
                // console.log(response.data)
                return [2 /*return*/, response.data];
        }
    });
}); });
exports.addFavorite = toolkit_1.createAsyncThunk("reducers/addFavorite", function (newFavorite) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api.post("addFavorite", newFavorite)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); });
exports.removeFavorite = toolkit_1.createAsyncThunk("reducers/deleteFavorite", function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api["delete"]("deletefavorite/" + id)];
            case 1:
                _a.sent();
                return [2 /*return*/, id];
        }
    });
}); });
//createSlice automatically generates action creators and action types, reducing the Redux boilerplate
var favoriteSlice = toolkit_1.createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        setFavorites: function (state, action) {
            state.favorites.push(action.payload);
        },
        setCurrentFavorite: function (state, action) {
            state.currentFavorite.splice(0, 1, action.payload);
            console.log('favorite set');
        }
        // deleteFavorite(state, action: PayloadAction<Photo>  ){ 
        // },
    },
    extraReducers: function (builder) {
        builder.addCase(exports.fetchFavorites.fulfilled, function (state, action) {
            console.log('success');
            state.status = "succeeded";
            state.favorites = state.favorites.concat(action.payload);
        });
        builder.addCase(exports.removeFavorite.fulfilled, function (state, action) {
            var deleted = state.favorites.find(function (fav) { return fav._id === action.payload; });
            state.favorites = state.favorites.filter(function (favorite) { return favorite !== deleted; });
            //why can't I do this in one step like below?? 
            // state.favorites = state.favorites.filter(favorite => favorite._id !== action.payload),
        });
        builder.addCase(exports.addFavorite.fulfilled, function (state, action) {
            state.favorites.push(action.payload.favorite);
            console.log('fav added', action.payload);
        });
    }
});
//Reducers only look at the dispatched action and create a new state value without basing logic on what the current state might be.
//Reducers also cannot handle asynchronous logic 
exports.setCurrentFavorite = favoriteSlice.actions.setCurrentFavorite;
exports["default"] = favoriteSlice.reducer;
