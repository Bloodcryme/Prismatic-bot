module.exports = {
    name: 'amosesdotastream',
    description: "Amos is live on twitch",
    execute(message, args) {
        const Discord = require('discord.js');
        message.delete().catch(error => console.log(err));
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#c41f3b')
            .setTitle('Melee')
            .setURL('https://twitch.tv/amosesdota/')
            .setAuthor('Amos is now live on Twitch!')
            .setImage('https://cdn.discordapp.com/attachments/871904414468833340/966516373931057213/giphy_3.gif')
            .setTimestamp()

        message.channel.send(exampleEmbed);

    }
}