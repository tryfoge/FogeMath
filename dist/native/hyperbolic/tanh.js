"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$tanh",
    version: "1.0.0",
    description: "Returns the hyperbolic tangent of x.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate hyperbolic tangent for.",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.tanh(x));
    },
});
//# sourceMappingURL=tanh.js.map