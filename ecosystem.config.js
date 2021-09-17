module.exports = {
	apps: [
		{
			name: 'discord-bot-demo',
			script: './index.js',
			watch: false,
			log_date_format: 'DD-MM-YYYY HH:mm Z',
			out_file: './discord-bot-demo.log',
			merge_logs: true,
			cron_restart: '0 0 * * *', // cron every day at midnight
			max_memory_restart: '900M',
			env_development: {
				NODE_ENV: 'development',
			},
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],
};
