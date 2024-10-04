import { ForgeClient, ForgeExtension, IExtendedCompilationResult } from "@tryforge/forgescript";
export type TransformEvents<T> = {
    [P in keyof T]: T[P] extends any[] ? (...args: T[P]) => any : never;
};
export declare class ForgeMath extends ForgeExtension {
    static defaults?: Record<PropertyKey, IExtendedCompilationResult | unknown>;
    name: string;
    description: string;
    version: string;
    commands: any;
    init(client: ForgeClient): void;
}
//# sourceMappingURL=index.d.ts.map