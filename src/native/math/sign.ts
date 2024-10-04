import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$sign",
    version: "1.0.0",
    description: "Returns if x is negative, null or positive (-1, 0, 1).",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to check the sign for.",
            type: ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [x]) {
        return this.success(Math.sign(x))
    },
})
