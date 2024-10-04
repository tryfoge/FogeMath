"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$ceil",
    version: "1.5.0",
    description: "Returns the smallest integer greater than or equal to its numeric argument",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true
        },
    ],
    execute(ctx, [n]) {
        return this.success(Math.ceil(n));
    },
});
//# sourceMappingURL=ceil.js.map