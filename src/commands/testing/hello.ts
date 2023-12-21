import { Commands } from "../../init";
import { SlashCommandBuilder, Client, Interaction, Message, CommandInteraction, ChatInputCommandInteraction } from "discord.js";
module.exports = function (client: Client | undefined) {
  const command = new SlashCommandBuilder()
  .setName("hello")
  .setDescription("Replies with olleh !");
  if (!client) return command.toJSON();
  Commands.set(command.name, async (client: Client, arg: ChatInputCommandInteraction | Message) => {
    if (arg instanceof Message) {
      const message = arg as Message;
      // ... handle message
      await message.reply("olleh !");

    } else if (arg instanceof ChatInputCommandInteraction) {
      const interaction = arg as ChatInputCommandInteraction;
      // ... handle interaction
        await interaction.reply("olleh !");
    } 
  });
};

function CommandAction(client: Client){

}
