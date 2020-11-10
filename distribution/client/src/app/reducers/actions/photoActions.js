"use strict";
exports.__esModule = true;
exports.setNewCurrentPhoto = exports.setCurrentPhoto = void 0;
var currentPhoto_1 = require("../types/currentPhoto");
function setCurrentPhoto(currentPhoto) {
    return {
        type: currentPhoto_1.SET_CURRENT,
        payload: currentPhoto
    };
}
exports.setCurrentPhoto = setCurrentPhoto;
function setNewCurrentPhoto(newCurrentPhoto) {
    return {
        type: currentPhoto_1.SET_NEWCURRENT,
        payload: newCurrentPhoto
    };
}
exports.setNewCurrentPhoto = setNewCurrentPhoto;
