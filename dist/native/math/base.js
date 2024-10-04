"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$base",
    version: "1.1.0",
    description: "Convert number from one base to another",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "number",
            description: "The target number for conversion",
            type: forgescript_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "to",
            description: "The target base",
            type: forgescript_1.ArgType.Number,
            rest: false,
            required: true,
        },
        {
            name: "from",
            description: "The source base",
            type: forgescript_1.ArgType.Number,
            rest: false,
        },
    ],
    execute(ctx, [n, to, from]) {
        return this.success(parseInt(n, from ?? 10).toString(to));
    },
});
//# sourceMappingURL=base.js.map