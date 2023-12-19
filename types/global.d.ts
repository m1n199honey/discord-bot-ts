export {};

declare global {
    interface Config {
        TOKEN?: string;
        CLIENT_SECRETE?: string;
        TOKEN?: string;
        BOT_ID?: string;
        ADMIN_ID?: string;
        SERVER_ID?: string;
        CHANNEL_ID?: string;
        PREFIX?: string;
        DEPLOY?: string;
    }
    namespace NodeJS {
        interface ProcessEnv extends Config {}
    }
}