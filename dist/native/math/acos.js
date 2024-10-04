"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$acos",
    version: "1.0.0",
    description: "Returns the arccosine of x, in radians.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate arccosine for.",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true,
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.acos(x));
    },
});
//# sourceMappingURL=acos.js.map