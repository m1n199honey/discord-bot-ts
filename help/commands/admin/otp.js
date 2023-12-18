const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("otp")
        .setDescription("Check OTP")
        .addIntegerOption((option) => option
            .setName("otp")
            .setDescription("OTP user get")
            .setRequired(true)
            .setMinValue(100000)
            .setMaxValue(999999)),
    async execute(command, client) {
        const OTP = command.options.getInteger("otp");
        if(OTP === client.varification.code) await command.reply("Phone NO. VERIFIED :thubmsup:");
        await command.replay("INVALID OTP :cross:");
    },
};
