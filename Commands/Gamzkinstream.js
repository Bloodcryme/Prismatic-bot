module.exports = {
    name: 'gamzkinstream',
    description: "Gamzkin is live on twitch",
    execute(message, args) {
        const Discord = require('discord.js');
        message.delete().catch(error => console.log(err));
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ff7d0a')
            .setTitle('Watch me or else')
            .setURL('https://www.twitch.tv/gamzkin/')
            .setAuthor('Gamzkin is now live on Twitch!')
            .setImage('https://cdn.discordapp.com/attachments/696675932932538421/894667049413009428/WoWScrnShot_093021_160637.png')
            .setTimestamp()

        message.channel.send(exampleEmbed);

    }
}