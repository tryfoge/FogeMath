import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$asin",
    version: "1.0.0",
    description: "Returns the arcsine of x, in radians.",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate arcsine for.",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.asin(x))
    },
})
