import { ForgeClient, ForgeExtension, IExtendedCompilationResult } from "@tryforge/forgescript"

export type TransformEvents<T> = {
    [P in keyof T]: T[P] extends any[] ? (...args: T[P]) => any : never
}

export class ForgeMath extends ForgeExtension {
    public static defaults?: Record<PropertyKey, IExtendedCompilationResult | unknown>

    name: string = "ForgeMath"
    description: string = "A fast and reliable math extension for Forge"
    version: string = require("../package.json").version

    public commands!: any

    init(client: ForgeClient): void {
        this.load(__dirname + "/native")
    }
}