import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$cosh",
    version: "1.0.0",
    description: "Returns the hyperbolic cosine of x.",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate hyperbolic cosine for.",
            type: ArgType.Number,
            rest: false,
            required: true
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.cosh(x))
    },
})
