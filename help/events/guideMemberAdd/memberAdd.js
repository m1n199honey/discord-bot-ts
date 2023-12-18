const Discord = require('discord.js');

module.exports = (client, member) => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find(c => c.name ===  '👋-welcome');
	
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	member.send(`Welcome to the server ${member} please read the rule channel and enjoy your journey to our server!`);
	
	let sicon = member.user.displayAvatarURL;
	let serverembed = new Discord.RichEmbed()
		.setColor("#ff0000")
		.setThumbnail(sicon)
		.addField("Here comes a new challenger!",`A new member has joined to our server ${member}`)
		.addField("Where should I start ?","You must check the rules channel, depending on which server this is");

	channel.send(serverembed);
  var role = member.guild.roles.find(role => role.name ===  'Client');
  member.addRole(role)
}