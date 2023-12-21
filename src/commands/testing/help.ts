import { Commands } from "../../init";
import { SlashCommandBuilder, Client, Interaction, Message, CommandInteraction, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ChatInputCommandInteraction } from "discord.js";
module.exports = function (client: Client | undefined) {
  const command = new SlashCommandBuilder()
    .setName("help")
    .setDescription("show help panel");
  if (!client) return command.toJSON();
  Commands.set(command.name, async (client: Client, arg: ChatInputCommandInteraction | Message) => {
    if (arg instanceof Message) {
      const message = arg as Message;
      // ... handle message
      await message.reply("help panel only actave through /help command");
      // message.channel.send(helpPanel());
    } else if (arg instanceof ChatInputCommandInteraction) {
      const interaction = arg as ChatInputCommandInteraction;
      // ... handle interaction  
      // await interaction.showModal(await helpPanel());
      // await interaction.reply("help panel");
      await interaction.reply({
        content: "Here are the available commands: \n\n" +
          "- `/help`: Display this help panel \n" +
          "- `/othercommand`: Perform a different action",
        ephemeral: true // Optional: Make instructions visible only to the user
      });
    }  
  });
};

function CommandAction(client: Client) {
}
async function helpPanel() {
  // Create a new modal
  const modal = new ModalBuilder()
    .setCustomId('help-modal')
    .setTitle('Help Panel');

  // Add content to the modal (replace with your desired content)
  modal.addComponents(
    new ActionRowBuilder<TextInputBuilder>().addComponents(
      new TextInputBuilder()
        .setLabel('Enter your question or search term')
        .setStyle(TextInputStyle.Paragraph)
        .setCustomId('search-field')
    )
  );

  // modal.addComponents(
  //   new ActionRowBuilder<TextInputBuilder>().addComponents(
  //     new Text
  // );

  // Return the modal
  return modal;
}
