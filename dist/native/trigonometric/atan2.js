"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$atan2",
    version: "1.0.0",
    description: "Returns the arctangent of the quotient of its arguments.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "y",
            description: "The y-coordinate.",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true,
        },
        {
            name: "x",
            description: "The x-coordinate.",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [y, x]) {
        return this.success(Math.atan2(y, x));
    },
});
//# sourceMappingURL=atan2.js.map