import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$tan",
    version: "1.0.0",
    description: "Returns the tangent of x (x is in radians).",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate tangent for.",
            type: ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.tan(x))
    },
})
