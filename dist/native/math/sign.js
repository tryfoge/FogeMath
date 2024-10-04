"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$sign",
    version: "1.0.0",
    description: "Returns if x is negative, null or positive (-1, 0, 1).",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to check the sign for.",
            type: forgescript_1.ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.sign(x));
    },
});
//# sourceMappingURL=sign.js.map