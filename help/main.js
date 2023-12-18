console.log('In bot.js .....(/)');
const { MongoClient } = require('mongodb');
const { TOKEN, guildID, clientID, authorID, mongodbURI} = process.env;//using gitpod evnironment variables
// console.log('TOKEN : ', TOKEN, 'guildID :' , guildID, 'clientID : ', clientID, 'authorID : ', authorID)
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages
    ]
});
client.MongoClient = new MongoClient(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true, });//mongoDB client object 
client.varification = {}; //phone no varification object
client.commands = new Collection();
// ---------------------------------------------------------------


// ---------------------------------------------------------------
require(path.join(__dirname, 'handleEvents.js'))(client);
client.handleEvents();
// console.log(TOKEN);
client.login(TOKEN);