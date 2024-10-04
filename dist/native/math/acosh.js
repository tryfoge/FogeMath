"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$acosh",
    version: "1.0.0",
    description: "Returns the hyperbolic arccosine of x.",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate hyperbolic arccosine for.",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.acosh(x));
    },
});
//# sourceMappingURL=acosh.js.map