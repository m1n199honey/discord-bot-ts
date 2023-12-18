module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        // console.log(interaction);
        console.log('interaction event is triggered ...');
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;
            try { await command.execute(interaction, client); }
            catch (error) {
                console.error(error);
                await interaction.reply({
                    content: 'There was an error while executing this command!',
                    ephemeral: true
                });
            }
        } else if (interaction.isModalSubmit()) {
            if (interaction.customId === 'profileForm') {
                const Name = interaction.fields.getTextInputValue('nameInput');
                await interaction.reply({ content: 'Your submission was received successfully!' });
            }
        } 
        return;
    }
}