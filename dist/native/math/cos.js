"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$cos",
    version: "1.0.0",
    description: "Returns the cosine of x (x is in radians).",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate cosine for.",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.cos(x));
    },
});
//# sourceMappingURL=cos.js.map