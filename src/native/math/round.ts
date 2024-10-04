import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$round",
    version: "1.0.0",
    description: "Rounds provided number to a certain number of decimal places",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "decimal places",
            description: "The number of decimal places to round to",
            rest: false,
            type: ArgType.Number,
        },
    ],
    execute(ctx, [n, dp]) {
        dp = dp === null ? 1 : Math.pow(10, dp)
        return this.success(Math.round(n * dp) / dp)
    },
})
