import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$bigintSum",
    version: "1.3.0",
    description: "Adds multiple numbers",
    brackets: true,
    unwrap: true,
    output: ArgType.BigInt,
    args: [
        {
            name: "numbers",
            description: "Numbers to add",
            rest: true,
            type: ArgType.BigInt,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(numbers.reduce((x, y) => x + y))
    },
})
