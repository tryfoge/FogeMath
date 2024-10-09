"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$tan",
    version: "1.0.0",
    description: "Returns the tangent of x (x is in radians).",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate tangent for.",
            type: forgescript_1.ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.tan(x));
    },
});
//# sourceMappingURL=tan.js.map