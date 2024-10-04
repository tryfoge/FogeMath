"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$sin",
    version: "1.0.0",
    description: "Returns the sine of x (x is in radians).",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate sine for.",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.sin(x));
    },
});
//# sourceMappingURL=sin.js.map