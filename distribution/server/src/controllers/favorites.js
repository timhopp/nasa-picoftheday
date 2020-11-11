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
exports.deleteAllFavorites = exports.deleteFavorite = exports.addFavorite = exports.getFavorites = void 0;
var favorite_1 = __importDefault(require("../models/favorite"));
var getFavorites = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var favorites, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, favorite_1["default"].find({ user: req.params.user })];
            case 1:
                favorites = _a.sent();
                res.status(200).json(favorites);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getFavorites = getFavorites;
var addFavorite = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, favorite, newFavorite, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                debugger;
                body = req.body;
                favorite = new favorite_1["default"]({
                    title: body.title,
                    date: body.date,
                    explanation: body.explanation,
                    url: body.url,
                    copyright: body.copyright,
                    user: body.user
                });
                return [4 /*yield*/, favorite.save()];
            case 1:
                newFavorite = _a.sent();
                res
                    .status(201)
                    .json(favorite);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addFavorite = addFavorite;
var deleteFavorite = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedFavorite, allFavorites, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, favorite_1["default"].findByIdAndRemove(req.params.id)];
            case 1:
                deletedFavorite = _a.sent();
                return [4 /*yield*/, favorite_1["default"].find()];
            case 2:
                allFavorites = _a.sent();
                res.status(200).json({
                    message: "Favorite Deleted",
                    favorite: deletedFavorite,
                    favorites: allFavorites
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                throw error_3;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteFavorite = deleteFavorite;
var deleteAllFavorites = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedFavorites, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, favorite_1["default"].deleteMany({ "date": "2020-11-10" })];
            case 1:
                deletedFavorites = _a.sent();
                res.status(200).json({
                    message: 'DELETED'
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                throw error_4;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteAllFavorites = deleteAllFavorites;
