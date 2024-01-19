"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCommand = void 0;
const core_1 = require("../../core");
const ApplicationCommandManager_1 = require("../../managers/ApplicationCommandManager");
const ForgeError_1 = require("../forge/ForgeError");
class ApplicationCommand {
    options;
    compiled;
    constructor(options) {
        this.options = options;
        this.compiled = core_1.Compiler.compile(options.code, options.path);
    }
    get name() {
        return this.options.data.name;
    }
    get registrationType() {
        return this.options.type ?? ApplicationCommandManager_1.RegistrationType.Global;
    }
    mustRegisterAs(type) {
        return this.registrationType === ApplicationCommandManager_1.RegistrationType.All || this.registrationType === type;
    }
    toJSON() {
        if (!this.options.data)
            throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.MissingApplicationCommandData, this.options.path ?? "index file");
        return "toJSON" in this.options.data ? this.options.data.toJSON() : this.options.data;
    }
}
exports.ApplicationCommand = ApplicationCommand;
//# sourceMappingURL=ApplicationCommand.js.map