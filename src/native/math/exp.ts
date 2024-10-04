import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$exp",
    version: "1.0.0",
    description: "Returns the value of E raised to the power of x.",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The power to raise e to.",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [x]) {
        return this.success(Math.exp(x))
    },
})
