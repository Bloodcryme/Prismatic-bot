module.exports = {
    name: 'wildstabxdstream',
    description: "Wildstab is live on twitch",
    execute(message, args) {
        const Discord = require('discord.js');
        message.delete().catch(error => console.log(err));
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#fff569')
            .setTitle('I\'m horrible with titles xd')
            .setURL('https://twitch.tv/wildstabxd/')
            .setAuthor('Wildstab is now live on Twitch!')
            .setImage('https://cdn.discordapp.com/attachments/696678622865522719/984512096941252638/Wild.png')
            .setTimestamp()

        message.channel.send(exampleEmbed);

    }
}