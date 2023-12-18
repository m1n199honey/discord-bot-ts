export {};

declare global {
    interface Config {
        TOKEN?: string;
    }
    namespace NodeJS {
        interface ProcessEnv extends Config {}
    }
}