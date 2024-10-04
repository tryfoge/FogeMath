import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$sinh",
    version: "1.0.0",
    description: "Returns the hyperbolic sine of x.",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate hyperbolic sine for.",
            type: ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.sinh(x))
    },
})
