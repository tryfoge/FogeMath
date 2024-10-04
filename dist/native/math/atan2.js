"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$atan2",
    version: "1.0.0",
    description: "Returns the arctangent of the quotient of its arguments.",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "y",
            description: "The y-coordinate.",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
        {
            name: "x",
            description: "The x-coordinate.",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [y, x]) {
        return this.success(Math.atan2(y, x));
    },
});
//# sourceMappingURL=atan2.js.map