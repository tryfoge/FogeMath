"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$voiceMove",
    version: "1.4.0",
    description: "Moves a member from a voice channel",
    brackets: true,
    aliases: [
        "$memberVoiceMove"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
        {
            name: "user ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Member,
            pointer: 0,
            description: "The user to move"
        },
        {
            name: "channel ID",
            description: "The voice channel to move this user to",
            rest: false,
            required: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isVoiceBased()
        }
    ],
    unwrap: true,
    async execute(ctx, [, member, voice]) {
        return this.success(!!(await member.voice.setChannel(voice).catch(ctx.noop)));
    },
});
//# sourceMappingURL=voiceMove.js.map