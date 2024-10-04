import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$atan2",
    version: "1.0.0",
    description: "Returns the arctangent of the quotient of its arguments.",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "y",
            description: "The y-coordinate.",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "x",
            description: "The x-coordinate.",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [y, x]) {
        return this.success(Math.atan2(y, x))
    },
})
