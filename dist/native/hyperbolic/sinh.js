"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$sinh",
    version: "1.0.0",
    description: "Returns the hyperbolic sine of x.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate hyperbolic sine for.",
            type: forgescript_1.ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.sinh(x));
    },
});
//# sourceMappingURL=sinh.js.map