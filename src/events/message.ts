import { ChannelType, Client, Collection, Events, Message, MessageReaction, PartialMessage, PartialMessageReaction } from "discord.js";
import MessageCreateHandler from "./messageType/messageCreateHandler";
module.exports = function (client: Client) {
    client.on(Events.MessageCreate, (message: Message<boolean>) => {
        if(message.author.bot) return;
        console.log("#aaaa00", "MessageCreate ");
        MessageCreateHandler(client, message);
    })
    client.on(Events.MessageDelete, (message: Message<boolean> | PartialMessage) => {
        if(message.author?.bot) return;

        console.log("#aaaa00", "MessageDelete");
    })
    client.on(Events.MessageUpdate, (message: Message<boolean> | PartialMessage) => {
        if (message.author?.bot) return;

        console.log("#aaaa00", "MessageUpdate");
    })
    client.on(Events.MessageBulkDelete, (collection: Collection<string, Message<boolean> | PartialMessage>) => {

        console.log("#aaaa00", "MessageUpdate");
    })
    client.on(Events.MessageReactionAdd, (messageReaction: MessageReaction | PartialMessageReaction) => {

        console.log("#aaaa00", "MessageReactionAdd");
    })
    client.on(Events.MessageReactionRemove, (messageReaction: MessageReaction | PartialMessageReaction) => {
        console.log("#aaaa00", "MessageReactionRemove");
    })
    client.on(Events.MessageReactionRemoveAll, (message: Message<boolean> | PartialMessage) => {
        if (message.author?.bot) return;

        console.log("#aaaa00", "MessageReactionAdd");
    })
    client.on(Events.MessageReactionRemoveEmoji, (messageReaction: MessageReaction | PartialMessageReaction) => {

        console.log("#aaaa00", "MessageReactionRemoveEmoji");
    })
}