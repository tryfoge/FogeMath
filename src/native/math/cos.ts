import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$cos",
    version: "1.0.0",
    description: "Returns the cosine of x (x is in radians).",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate cosine for.",
            rest: false,
            type: ArgType.Number,
            required: true
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.cos(x))
    },
})
