import { ChannelType, Client, Message } from "discord.js";
import { Commands, config } from "../../init";
const prefix = config.PREFIX ? config.PREFIX : '!';
export default function MessageCreateHandler(client: Client, message: Message){
  if (message.channel.type == ChannelType.GuildText){
    console.log("#aaaa00", "\tGuild: ", message.guild?.name);
    console.log("#aaaa00", "\tChannel: ", message.channel.name);
    GuildMessages(client, message);
  } else if(message.channel.type == ChannelType.DM){
    console.log("#aaaa00", "\tDM Channel: ", message.author.displayName);
    DMMessages(client, message);
  }
}
function isMessageCommand(client: Client, message: Message){
  const Content = message.content;
  if (Content.startsWith(prefix)) {
    const args = Content.split(' ');
    const Command = Commands.get(args[0].slice(1)) as (client: Client, message: Message) => void;
    if (!Command) return;
    try { Command(client, message); }
    catch (error) {
      console.error(error);
    }
    return true;
  }
  return false;
}
async function GuildMessages(client: Client, message: Message){
  if (isMessageCommand(client, message)) return;
}
async function DMMessages(client: Client, message: Message){
  if (isMessageCommand(client, message)) return;
  if (message.content.startsWith(prefix)) message.reply("use help command to know about avilable commands")
}