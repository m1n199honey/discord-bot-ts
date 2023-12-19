import { Client, Events } from "discord.js";
module.exports = function(client: Client){
    client.once(Events.ClientReady, (client)=>{
        console.log("#aaaaaa", "Bot Name: ", "#0000ff", `${client.user.tag}`);
        console.log("#aaaaaa", "Status: ", "#00ff00", "online");
    })
}