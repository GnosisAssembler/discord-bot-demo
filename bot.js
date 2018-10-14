// Require dependencies
const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const { RichEmbed } = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');

// Init bot
const client = new Discord.Client();

// Ready event
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Prefix
const prefix = '~';

// Static messages
client.on('message', msg => {
    if (msg.content === prefix + 'help') {
        msg.channel.sendMessage(`\n1. ~help : Show available commands 
        \n2. ~boop : Play sombra sound quote
        \n3. ~hola : Sombra say hi
        \n4. ~mexicano : Sombra pic
        \n5. ~iqtest : Finds ur iq
        \n6. ~music : Play sombra song`);
    }
});
client.on('message', msg => {
    if (msg.content === prefix + 'hola') {
        msg.reply('Hey, Qué tal?');
    }
});

// New member greetings
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Lets hack the planet, ${member} ...together`);
});

// Sombra Sounds
var isReady = true;
client.on('message', message => {
    if (isReady && message.content === prefix + 'boop')
    {
    isReady = false;
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection =>
    {
        const dispatcher = connection.playFile('./assets/sounds/test.ogg');
        dispatcher.on("end", end => {
        voiceChannel.leave();
        });
    }).catch(err => console.log(err));
    isReady = true;
    }
});

// Send attachment
client.on('message', message => {
    // If the message is 'mexican meat'
    if (message.content === prefix + 'mexicano') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://static.zerochan.net/Sombra.%28Overwatch%29.full.2176561.jpg');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});

// Embed message box
client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === prefix + 'iqtest') {
        const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('Iq test')
        // Set the color of the embed
        .setColor(0xFF0000)
        // Set the main content of the embed
        .setDescription('Bellow 0.7 sorry...boop');
        // Send the embed to the same channel as the message
        message.channel.send(embed);
    }
});

// Music
ytdl('https://www.youtube.com/watch?v=nkVKE3iUYKE', { filter: 'audioonly' })
    .pipe(fs.createWriteStream('assets/music/sombra-song.mp3'));

var isReady = true;
client.on('message', message => {
    if (isReady && message.content === prefix + 'music')
    {
    isReady = false;
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection =>
    {
        const dispatcher = connection.playFile('./assets/music/sombra-song.mp3');
        dispatcher.on("end", end => {
        voiceChannel.leave();
        });
    }).catch(err => console.log(err));
    isReady = true;
    }
});

// Login token
client.login(require('./config/keys').botToken);