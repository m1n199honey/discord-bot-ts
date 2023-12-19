import { Commands } from "../../init";
import { SlashCommandBuilder, Client, Interaction, Message, CommandInteraction } from "discord.js";
module.exports = function (client: Client | undefined) {
  const command = new SlashCommandBuilder()
  .setName("hello")
  .setDescription("Replies with olleh !");
  if (!client) return command.toJSON();
  Commands.set(command.name, async (client: Client, arg: Interaction | Message) => {
    if (arg instanceof Message) {
      const message = arg as Message;
      // ... handle message
      await message.reply("olleh !");

    } else if(arg instanceof CommandInteraction) {
      const interaction = arg as CommandInteraction;
      // ... handle interaction
        await interaction.reply("olleh !");
    } else {
      console.log("#bb0000", "Not a command [interaction or message]")
    }
  });
};

function CommandAction(client: Client){

}
