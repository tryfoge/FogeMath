import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$atanh",
    version: "1.0.0",
    description: "Returns the hyperbolic arctangent of x.",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate hyperbolic arctangent for.",
            type: ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.atanh(x))
    },
})
