"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$exp",
    version: "1.0.0",
    description: "Returns the value of E raised to the power of x.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The power to raise e to.",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.exp(x));
    },
});
//# sourceMappingURL=exp.js.map