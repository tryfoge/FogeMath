import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$multi",
    version: "1.0.0",
    description: "Multiplies multiple numbers",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "numbers",
            description: "Numbers to multiply",
            rest: true,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(numbers.reduce((x, y) => x * y))
    },
})
