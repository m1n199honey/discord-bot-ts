const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with hello!"),
    async execute(command) {
        await command.reply("pong !");
    },
};
