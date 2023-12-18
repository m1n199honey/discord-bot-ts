const { TOKEN, guildID, clientID, authorID } = process.env; ////using gitpod evnironment variables
// console.log('TOKEN : ', TOKEN, 'guildID :' , guildID, 'clientID : ', clientID, 'authorID : ', authorID)
const fs = require('node:fs');
const path = require('node:path');
const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const rest = new REST({ version: '10' }).setToken(TOKEN);

// setting-commands--------------------------------------------------------------------------------------------------
    const commands = [];
    const commandsPath = path.join(__dirname, 'commands');
    for (const folder of fs.readdirSync(commandsPath)) {
        const folderPath = path.join(commandsPath, folder);
        for (const file of fs.readdirSync(folderPath).filter((file) => file.endsWith(".js"))) {
            commands.push(require(path.join(folderPath, file)).data.toJSON());
        }
    }


// inseart-commands--------------------------------------------------------------------------------------------------
    rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);


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