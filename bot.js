const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

//when bot starts it posts username in consol
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

//usefull commands
if (command === 'ping') {
  message.channel.send('Pong.');
}
//Moderation
yo there is somewhere a bug in the code becouse the bot won't run goldenedit can you find it?


client.login('NTkyMDEyNDM5ODY5MDYzMTk5.XQ5ImQ.dD97SVZsh-NJ-erK6bwby7EyyrU');

























//MUST BE LAST LINE OF CODE !!
client.login(config.token);
