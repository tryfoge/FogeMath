import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$acosh",
    version: "1.0.0",
    description: "Returns the hyperbolic arccosine of x.",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate hyperbolic arccosine for.",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.acosh(x))
    },
})
