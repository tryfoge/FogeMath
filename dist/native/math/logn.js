"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$logn",
    version: "1.0.0",
    description: "Returns the natural logarithm (base e) of a number",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "number",
            description: "Number to get its logarithm",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [n]) {
        return this.success(Math.log(n));
    },
});
//# sourceMappingURL=logn.js.map