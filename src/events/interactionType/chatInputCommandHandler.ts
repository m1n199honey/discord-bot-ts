import { Commands } from "../../init";
import { ChatInputCommandInteraction, Client, Interaction } from "discord.js";
export default async function ChatInputCommandHandler(client: Client, interaction: ChatInputCommandInteraction){
  const Command = Commands.get(interaction.commandName) as (client: Client, interaction: Interaction) => void;
  if (!Command) return;
  try { Command(client, interaction); }
  catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error while executing this command! contect to Admin',
      ephemeral: true
    });
  }
}