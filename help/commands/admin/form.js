const { SlashCommandBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("form")
        .setDescription("Provide a form for user"),
    async execute(command) {
        const Name = new TextInputBuilder()
            .setCustomId('nameInput')
            // The label is the prompt the user sees for this input
            .setLabel("Enter your name ?")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short)
            // require a value in this input field
            .setRequired(true);
        const PhNo = new TextInputBuilder()
            .setCustomId('phnoInput')
            // The label is the prompt the user sees for this input
            .setLabel("Phone No. ?")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short)
            // require a value in this input field
            .setRequired(true);

        // An action row only holds one text input,
        const row1 = new ActionRowBuilder().addComponents(Name);
        const row2 = new ActionRowBuilder().addComponents(PhNo);

        // Create the modal
        const modal = new ModalBuilder().setCustomId('profileForm').setTitle('PROFILE FORM');
        modal.addComponents(row1, row2);

        await command.showModal(modal);

    },
};