import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$max",
    version: "1.0.7",
    description: "Returns the largest number of the ones given",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "numbers",
            description: "Numbers among which to find the largest",
            rest: true,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(Math.max(...numbers))
    },
})
