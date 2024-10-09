"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$asinh",
    version: "1.0.0",
    description: "Returns the hyperbolic arcsine of x.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate hyperbolic arcsine for.",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.asinh(x));
    },
});
//# sourceMappingURL=asinh.js.map