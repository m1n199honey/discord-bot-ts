import { Client, Message } from "discord.js";
import { Commands, config } from "../../init";
const prefix = config.PREFIX ? config.PREFIX : '!';
export default function MessageCreateHandler(client: Client, message: Message){
  const Content = message.content;
  if(Content.startsWith(prefix)){
    const args = Content.split(' ');
    const Command = Commands.get(args[0].slice(1)) as (client: Client, message: Message) => void;
    if (!Command) return;
    try { Command(client, message); }
    catch (error) {
      console.error(error);
      // await message.reply({
      //   content: 'There was an error while executing this command!',
      //   ephemeral: true
      // });
    }
  }
}