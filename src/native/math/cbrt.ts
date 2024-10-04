import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$cbrt",
    version: "1.0.0",
    description: "Returns the cubic root of x.",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate the cubic root for.",
            type: ArgType.Number,
            rest: false,
            required: true
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.cbrt(x))
    },
})
