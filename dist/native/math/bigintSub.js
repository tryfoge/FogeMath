"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$bigintSub",
    version: "1.3.0",
    description: "Subtracts multiple numbers",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.BigInt,
    args: [
        {
            name: "numbers",
            description: "Numbers to sub",
            rest: true,
            type: forgescript_1.ArgType.BigInt,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(numbers.reduce((x, y) => x - y));
    },
});
//# sourceMappingURL=bigintSub.js.map