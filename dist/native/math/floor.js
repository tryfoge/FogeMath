"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$floor",
    version: "1.0.0",
    description: "Returns the greatest integer less than or equal to its numeric argument",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [n]) {
        return this.success(Math.floor(n));
    },
});
//# sourceMappingURL=floor.js.map