"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$min",
    version: "1.0.7",
    description: "Returns the smallest number of the ones given",
    brackets: true,
    output: forgescript_1.ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers among which to find the smallest",
            rest: true,
            type: forgescript_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(Math.min(...numbers));
    },
});
//# sourceMappingURL=min.js.map