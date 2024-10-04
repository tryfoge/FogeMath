"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const MathRegex = /[^0-9%\-+./*\t\n\s()<>]/;
exports.default = new forgescript_1.NativeFunction({
    name: "$math",
    version: "1.0.0",
    description: "Run math expression, returns nothing if incorrect expression",
    brackets: true,
    output: forgescript_1.ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "expr",
            description: "The expression",
            rest: false,
            type: forgescript_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [expr]) {
        try {
            if (MathRegex.test(expr))
                return this.success();
            return this.success(eval(expr));
        }
        catch (error) {
            return this.success();
        }
    },
});
//# sourceMappingURL=math.js.map