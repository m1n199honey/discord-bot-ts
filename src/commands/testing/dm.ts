import { Commands, config } from "../../init";
import { SlashCommandBuilder, Client, ChatInputCommandInteraction, Message } from "discord.js";

module.exports = function (client: Client | undefined) {
  const dmCommand = new SlashCommandBuilder()
    .setName("dm")
    .setDescription("Sends a direct message to the user");

  if (!client) return dmCommand.toJSON();

  Commands.set(dmCommand.name, async (client: Client, arg: ChatInputCommandInteraction | Message) => {
    if(arg instanceof Message) {
      const message = arg as Message;
      const user = message.author;
      const dmChannel = await user.createDM();
      try {
        await dmChannel.send({ content: "Hello there! Give me instructions in DM." });
      } catch (error) {
        console.error("Error sending DM:", error);
        await message.reply({ content: "Failed to send DM. Please check your privacy settings or try again later." });
        return;
      }
      message.reply(`check your DM!\nhttps://discord.com/channels/@me/${dmChannel.id}`);
    } else if (arg.isChatInputCommand()){
      const interaction = arg as ChatInputCommandInteraction;
      const user = interaction.user;
      const dmChannel = await user.createDM();
      try {
        await dmChannel.send({ content: "Hello there! Give me instructions in DM." });
      } catch (error) {
        console.error("Error sending DM:", error);
        await interaction.reply({ content: "Failed to send DM. Please check your privacy settings or try again later.", ephemeral: true });
        return;
      }
      await interaction.reply(`check your DM!\nhttps://discord.com/channels/@me/${dmChannel.id}`);
    }
  });
};
