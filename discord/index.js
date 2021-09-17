'use strict';
/**
 * Discord client (Discord.js) initialization function
 * @return client: Discord api-client reference
 */

const { Client, Intents } = require('discord.js');
const configKeys = require('../config/keys');

const connectDiscord = async () => {
	// Init discord client
	const client = new Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES'] } });
	client.once('ready', () => {
		console.group('Discord Client');
		console.log(`Logged in as ${client.user.tag}.`);
	});
	// Connect discord bot token
	client.login(configKeys.botToken);
	return client;
};

module.exports.connectDiscord = connectDiscord;
