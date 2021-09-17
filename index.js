'use strict';

const discordClient = require('./discord/index');
const botlogic = require('./logic/botlogic');

// Connect to discord client
discordClient
	.connectDiscord()
	.then((client) => {

        botlogic(client);
		console.groupEnd('Discord Client');
	})
	.catch((err) => {
		console.log(
			'There was a problem connecting to discord.',
			err,
		);
	});

process.on('unhandledRejection', (err) => {
	console.log('[UNHANDLED REJECTION]: There was an unhandled rejection', err);
});

process.on('uncaughtException', (err) => {
	console.log('[UNCAUGHT EXCEPTION]: There was an uncaught error', err);
});
