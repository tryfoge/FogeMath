import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$atan",
    version: "1.0.0",
    description: "Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians.",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate arctangent for.",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.atan(x))
    },
})
