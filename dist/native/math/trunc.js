"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$trunc",
    version: "1.0.0",
    description: "Returns the integer part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x",
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
        return this.success(Math.trunc(n));
    },
});
//# sourceMappingURL=trunc.js.map