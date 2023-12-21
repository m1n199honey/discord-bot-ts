import path from "path";
import { REST } from '@discordjs/rest';

import { Client, GatewayIntentBits, SlashCommandBuilder, Routes } from "discord.js";
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Required for basic guild operations
        GatewayIntentBits.GuildMessages, // Required for receiving and responding to messages
        GatewayIntentBits.DirectMessages, // Required for private messaging
        GatewayIntentBits.MessageContent, // To access the full content of messages, Attachments(images, files, etc. Embed Reaction Mention Edited message Deleted messages
    ]
});

import("./init").then(async (i) => {
    await i.default(); const { config } = i;

    if (config.TOKEN && config.SERVER_ID && config.BOT_ID){
        await i.SetEvents(path.join(__dirname, "events"), client);
        await i.SetCommands(path.join(__dirname, "commands"), client);

        if(config.DEPLOY == 'yes'){ 

        // ######  Deploy Commands ############## ---------------------------------

            const rest = new REST({ version: '10' }).setToken(config.TOKEN);
            const commands = await i.SetCommandsJSON(path.join(__dirname, "commands"));
            if(!config.SERVER_ID) return console.log("#ff0000", "Guild ID not provided for command deployment");
            rest.put(Routes.applicationGuildCommands(config.BOT_ID, config.SERVER_ID), {body: commands})
                .then(() => {
                    console.log("#22bb11", 'Successfully registered application commands.'); 
                    client.login(config.TOKEN);
                })
                .catch(console.error);

        // ######  Deploy Commands ############## -----------------------------------

        } else if (config.DEPLOY == 'no') {
            console.log("#aa1111", "no command deployed or previous being used")
            client.login(config.TOKEN);
        }
    }
})


// const commandId = '10**3*3*3*3*3*2*3*5208';
// Delete-one-command-using-ID--------------------------------------------------------------------------------------------------
    // for guild-based commands
        // rest.delete(Routes.applicationGuildCommand(clientId, guildId, commandId))
        //             .then(() => console.log('Successfully deleted guild command'))
        //             .catch(console.error);

// for global commands--------------------------------------------------------------------------------------------------

        // rest.delete(Routes.applicationCommand(clientId, commandId))
        //     .then(() => console.log('Successfully deleted application command'))
        //     .catch(console.error);
        
// Delete-all-commands-at-once-------------------------------------------------------------------------------------------------
    // for guild-based commands
        // rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
        //     .then(() => console.log('Successfully deleted all guild commands.'))
        //     .catch(console.error);

    // for global commands
        // rest.put(Routes.applicationCommands(clientId), { body: [] })
        //     .then(() => console.log('Successfully deleted all application commands.'))
        //     .catch(console.error);

