"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$cosh",
    version: "1.0.0",
    description: "Returns the hyperbolic cosine of x.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate hyperbolic cosine for.",
            type: forgescript_1.ArgType.Number,
            rest: false,
            required: true
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.cosh(x));
    },
});
//# sourceMappingURL=cosh.js.map