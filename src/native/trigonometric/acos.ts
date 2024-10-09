import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$acos",
    version: "1.0.0",
    description: "Returns the arccosine of x, in radians.",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "x",
            description: "The number to calculate arccosine for.",
            rest: false,
            type: ArgType.Number,
            required: true,
        }
    ],
    execute(ctx: any, [x]: any) {
        return this.success(Math.acos(x))
    },
})
