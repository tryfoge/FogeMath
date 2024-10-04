import { ArgType, NativeFunction } from "../../structures"

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
    execute(ctx, [x]) {
        return this.success(Math.acos(x))
    },
})
