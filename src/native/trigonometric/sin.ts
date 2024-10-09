import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$sin",
    version: "1.0.0",
    description: "Returns the sine of x (x is in radians).",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate sine for.",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.sin(x))
    },
})
