console.clear();
require("dotenv").config(); const config = process.env;
// import * as config from "../config.json";
import { Client, Collection, RESTPostAPIChatInputApplicationCommandsJSONBody } from 'discord.js';
import fs from "fs"; import path from "path";
// ################################################################
export { config };
export const Commands = new Collection();
export async function SetEvents(folder: string, client: Client) {
    fs.readdirSync(folder)
        .filter(f => f.endsWith(".ts"))
        .forEach(file => require(path.join(folder, file))(client))
}
export async function SetCommands(folder: string, client: Client) {
    fs.readdirSync(folder)
        .forEach(subfolder => {
            fs.readdirSync(path.join(folder, subfolder))
                .filter(f => f.endsWith(".ts"))
                .forEach(file => require(path.join(folder, subfolder, file))(client))
        })
}
export async function SetCommandsJSON(folder: string) {
    const commands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];
    fs.readdirSync(folder)
        .forEach(subfolder => {
            fs.readdirSync(path.join(folder, subfolder))
                .filter(f => f.endsWith(".ts"))
                .forEach(file => commands.push(require(path.join(folder, subfolder, file))()))
        })
    return commands;
}
// ################################################################
const log = console.log;
const getAnsiColorCode = (hexColor: string): string => {
    // Convert hex to RGB
    const hexToRgb = (hex: string): number[] => {
        const bigint = parseInt(hex.substring(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    };
    const [r, g, b] = hexToRgb(hexColor);
    // ANSI escape codes for 256-color mode
    return `\x1b[38;2;${r};${g};${b}m`;
};

export default async function () {
    console.log = function (...data: any[]): void {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (
                typeof item === 'string' &&
                /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(item)
            ) {
                process.stdout.write(getAnsiColorCode(item));
            } else {
                process.stdout.write(item);
            }
        }
        process.stdout.write('\x1b[0m\n'); // Reset color and move to the next line
    };
    console.log("#001", "TOKEN: ", "#44aa33", config.TOKEN)
    console.log("#001", "BOT_ID: ", "#aa5555", config.BOT_ID)
    console.log("#001", "ADMIN_ID: ", "#aa5555", config.ADMIN_ID)
    console.log("#001", "SERVER_ID: ", "#aa5555", config.SERVER_ID)
    console.log("#001", "CHANNEL_ID: ", "#aa5555", config.CHANNEL_ID)
    console.log("#001", "PREFIX: ", "#aabb00", config.PREFIX)
}