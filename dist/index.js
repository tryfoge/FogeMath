"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeMath = void 0;
const forgescript_1 = require("@tryforge/forgescript");
class ForgeMath extends forgescript_1.ForgeExtension {
    static defaults;
    name = "ForgeMath";
    description = "A fast and reliable math extension for Forge";
    version = require("../package.json").version;
    commands;
    init(client) {
        this.load(__dirname + "/native");
    }
}
exports.ForgeMath = ForgeMath;
//# sourceMappingURL=index.js.map