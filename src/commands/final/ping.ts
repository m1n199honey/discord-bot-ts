import { Commands, config } from "../../init";
import { SlashCommandBuilder, Client, ChatInputCommandInteraction, Message, InteractionReplyOptions, MessagePayload, InteractionResponse } from "discord.js";

module.exports = function (client: Client | undefined) {
  const Command = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check the bot's latency or response time");

  if (!client) return Command.toJSON();

  Commands.set(Command.name, async (client: Client, arg: ChatInputCommandInteraction | Message) => {
    const startTime = Date.now();
    if (arg instanceof Message) { 
      const message = arg as Message;
      try {
        await commandAction(client, message);
      } catch (error) {
        console.error("Error sending DM:", error);
        // await message.reply({ content: "Failed to send DM. Please check your privacy settings or try again later." });
        return;
      }
    } else if (arg.isChatInputCommand()) {
      const interaction = arg as ChatInputCommandInteraction;
      try {
        await commandAction(client, interaction);
      } catch (error) {
        console.error("Error sending DM:", error);
        await interaction.reply({ content: "Not Able to Execute Command!", ephemeral: true });
        return;
      }
    }
  });
};

async function commandAction(client: Client, command: ChatInputCommandInteraction | Message){
  const startTime = Date.now();
  command.reply({ content: "Calculating ping..." , ephemeral: true}).then(sentMessage => {
    const endTime = Date.now();
    const ping = endTime - startTime;
    sentMessage.edit(`Pong! Latency is ${ping}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  });
}