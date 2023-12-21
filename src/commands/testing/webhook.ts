import { Commands } from "../../init";
import { SlashCommandBuilder, Client, Interaction, Message, CommandInteraction, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder, resolveColor, ChatInputCommandInteraction, EmbedData } from "discord.js";

module.exports = function (client: Client | undefined) {
  const command = new SlashCommandBuilder()
    .setName("webhook")
    .setDescription("create Embed Message")
    .addStringOption(option => option.setName("color").setDescription("color for Embed")
    .setRequired(true)
      .addChoices(
        { name: 'default', value: "111111" },
        { name: 'red', value: "ff0000" },
        { name: 'green', value: "00ff00" },
        { name: 'blue', value: "0000ff" },
      ))
    .addStringOption(option => option.setName("title").setDescription("Title for Embed").setRequired(true))
    .addStringOption(option => option.setName("url").setDescription("Url for Embed"))
    .addStringOption(option => option.setName("description").setDescription("Description for Embed"))
  if (!client) return command.toJSON();
  Commands.set(command.name, async (client: Client, arg: ChatInputCommandInteraction | Message) => {
    if (arg instanceof Message) {
      const message = arg as Message;
      // ... handle message 
      await message.reply("`use /webhook instead!`");

    } else if(arg instanceof ChatInputCommandInteraction) {
      const interaction = arg as ChatInputCommandInteraction;
      // ... handle interaction
      const embedData: EmbedData = {};
      embedData.color = parseInt(interaction.options.getString("color") || '000000', 16);
      embedData.title = interaction.options.getString("title") || "not avialable due to error"
      embedData.description = interaction.options.getString("description") || "not provided"
      const embed = await createEmbedMessage(embedData);
      await interaction.reply({ embeds: [embed],  });
      // console.log(JSON.stringify(embed))
      // await interaction.reply("value recevied!");
    }
  });
};


async function createEmbedMessage(embedData: EmbedData) {
  const embed = new EmbedBuilder();
  if (embedData.color) embed.setColor(embedData.color);
  if (embedData.title) embed.setTitle(embedData.title);
  if (embedData.url) embed.setURL(embedData.url);
  if (embedData.description) embed.setDescription(embedData.description);
  return embed;
  // if (embedData.image) embed.setImage(embedData.image);
  // if (embedData.timestamp) embed.setTimestamp(embedData.timestamp);
  // if (embedData.color) embed.setColor(embedData.color);
  // if (embedData.color) embed.setColor(embedData.color);
  // if (embedData.color) embed.setColor(embedData.color);
  // if (embedData.color) embed.setColor(embedData.color);
  // if (embedData.color) embed.setColor(embedData.color);
  // if (embedData.color) embed.setColor(embedData.color);
  // if (embedData.color) embed.setColor(embedData.color);
  // return new EmbedBuilder()
  //   .setColor(0x0099FF)
  //   .setTitle(title)
  //   .setURL('https://discord.js.org/')
  //   .setDescription('Some description here')
  //   .setImage('https://i.imgur.com/AfFp7pu.png')
  //   .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
  //   .setThumbnail('https://i.imgur.com/AfFp7pu.png')
  //   .addFields(
  //     { name: 'Regular field title', value: 'Some value here' },
  //     { name: '\u200B', value: '\u200B' },
  //     { name: 'Inline field title', value: 'Some value here', inline: true },
  //     { name: 'Inline field title', value: 'Some value here', inline: true },
  //   )
  //   .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
  //   .setTimestamp()
  //   .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
}


// async function askEmbedContent() {
//   // Create a new modal
//   const modal = new ModalBuilder()
//     .setCustomId('webhook-template')
//     .setTitle('Webhook Template');

//   // Add content to the modal (replace with your desired content)
//   modal.addComponents(
//     new ActionRowBuilder<TextInputBuilder>()
//     .addComponents(
//         new TextInputBuilder()
//           .setCustomId('embed-title')
//           .setLabel('Title')
//           .setStyle(TextInputStyle.Short)
//           .setRequired(true)
//           .setMaxLength(20)
//           .setMinLength(5)
//           .setPlaceholder("Title for Embed")
//     )
//   );
//   modal.addComponents(
//     new ActionRowBuilder<TextInputBuilder>().addComponents(
//       new TextInputBuilder()
//         .setCustomId('embed-image-url')
//         .setLabel('Image Url')
//         .setStyle(TextInputStyle.Short)
//         .setMinLength(10)
//         .setMaxLength(50)
//         .setPlaceholder("http:// or https://")
//     )
//   );
//   modal.addComponents(
//     new ActionRowBuilder<TextInputBuilder>().addComponents(
//       new TextInputBuilder()
//         .setCustomId('embed-description')
//         .setLabel('Description')
//         .setStyle(TextInputStyle.Paragraph)
//         .setMinLength(10)
//         .setMaxLength(200)
//         .setPlaceholder("Description of Embed in max 200 letters")
//     )
//   );
//   modal.addComponents(
//     new ActionRowBuilder<TextInputBuilder>().addComponents(
//       new TextInputBuilder()
//         .setCustomId('embed-footer-text')
//         .setLabel('Footer Text')
//         .setStyle(TextInputStyle.Short)
//         .setMinLength(10)
//         .setMaxLength(50)
//         .setPlaceholder("Fotter text max 50 letters")
//     )
//   );
//   modal.addComponents(
//     new ActionRowBuilder<TextInputBuilder>().addComponents(
//       new TextInputBuilder()
//         .setCustomId('embed-footer-icon-url')
//         .setLabel('Footer Icom Url')
//         .setStyle(TextInputStyle.Short)
//         .setMinLength(10)
//         .setMaxLength(50)
//         .setPlaceholder("http:// or https://")
//     )
//   );
//   return modal;
// }
