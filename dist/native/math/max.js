"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$max",
    version: "1.0.7",
    description: "Returns the largest number of the ones given",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "numbers",
            description: "Numbers among which to find the largest",
            rest: true,
            type: forgescript_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(Math.max(...numbers));
    },
});
//# sourceMappingURL=max.js.map