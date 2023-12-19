import { CacheType, Client, Events, Interaction} from "discord.js";
import ChatInputCommandHandler from "./interactionType/chatInputCommandHandler";
module.exports = function (client: Client) {
    client.on(Events.InteractionCreate, async (interaction: Interaction<CacheType>) => {
        console.log("#0000aa", "InteractionCreate");
        if(interaction.isChatInputCommand()) {
           ChatInputCommandHandler(client, interaction);
        } else {
            console.log("interaction type: ", interaction.type)
        }
    })
}