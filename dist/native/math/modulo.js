"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$modulo",
    version: "1.0.0",
    description: "Returns the remainder of multiple numbers",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "numbers",
            description: "Numbers to get their remainders",
            rest: true,
            type: forgescript_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(numbers.reduce((x, y) => x % y));
    },
});
//# sourceMappingURL=modulo.js.map