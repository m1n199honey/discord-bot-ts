import { Client, Events } from "discord.js";
module.exports = function (client: Client) {
    client.on(Events.Error, (error) => {
        console.log("#ff3333", `Error: ${error.name}`);
        console.log("#bb0000", `${error.message}`);
    })
    client.on(Events.ShardError, (error) => {
        console.log("ShardError");
        console.log("#ff3333", `Error: ${error.name}`);
        console.log("#bb0000", `${error.message}`);
    })
}