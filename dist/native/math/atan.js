"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$atan",
    version: "1.0.0",
    description: "Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians.",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate arctangent for.",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.atan(x));
    },
});
//# sourceMappingURL=atan.js.map