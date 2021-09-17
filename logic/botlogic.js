module.exports = function (client) {
	try {
		// Everything must be wrapped up inside the discord 'ready' event
		client.once('ready', () => {
			client.channels.cache.get('SAMPLE_CHANNEL_ID').send('test text');
			console.log('Logic goes here');
		});
	} catch (err) {
		console.log(
			'Something is wrong with the logic',
			err,
		);
	}
};
