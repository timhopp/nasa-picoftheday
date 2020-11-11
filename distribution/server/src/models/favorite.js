"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var favoriteSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    copyright: {
        type: String,
        required: false
    },
    explanation: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports["default"] = mongoose_1.model("Favorite", favoriteSchema);
