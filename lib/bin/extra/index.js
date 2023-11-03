"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initExtraPack = void 0;
var plugin_1 = require("@/plugin");
var extraPack = (0, plugin_1.getPluginList)();
var initExtraPack = function () {
    var extraPacks = [];
    extraPack.forEach(function (extra) {
        extraPacks.push(module.require(extra.name));
    });
    return extraPacks;
};
exports.initExtraPack = initExtraPack;
