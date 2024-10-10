import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$progressBar",
    version: "1.0.0",
    description: "Generates a progress bar based on the provided percentage.",
    brackets: true,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "percentage",
            description: "The progress percentage (0-100)",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "length",
            description: "The length of the progress bar",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "filledChar",
            description: "The character representing filled progress",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "emptyChar",
            description: "The character representing empty progress",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "showLabels",
            description: "Whether to show the percentage as a label at the end (true/false)",
            rest: false,
            type: ArgType.Boolean,
            required: false,
            default: true,
        }
    ],
    execute(ctx, [percentage, length, filledChar, emptyChar, showLabels = true]) {
        percentage = Math.max(0, Math.min(100, percentage));

        const filledLength = Math.round((percentage / 100) * length);
        const emptyLength = length - filledLength;

        const progressBar = filledChar.repeat(filledLength) + emptyChar.repeat(emptyLength);

        const result = showLabels ? `[${progressBar}] ${percentage}%` : `[${progressBar}]`;

        return this.success(result);
    }
});
