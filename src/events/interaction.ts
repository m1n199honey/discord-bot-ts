import { CacheType, ChannelType, Client, Events, Interaction} from "discord.js";
import ChatInputCommandHandler from "./interactionType/chatInputCommandHandler";
module.exports = function (client: Client) {
    client.on(Events.InteractionCreate, async (interaction: Interaction<CacheType>) => {
        console.log("#0000aa", "InteractionCreate");
        if (interaction.channel?.type == ChannelType.GuildText) {
            console.log("#0000aa", "\tGuild: ", interaction.guild?.name);
            console.log("#0000aa", "\tChannel: ", interaction.channel.name);
        } 
        if(interaction.isChatInputCommand()) {
           ChatInputCommandHandler(client, interaction);
        } else {
            console.log("#5555ff", "\tinteraction type: ", "#aa00aa", interaction.type)
        }
    })
}