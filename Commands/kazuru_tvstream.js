module.exports = {
    name: 'kazuru_tvstream',
    description: "Kazuru is live on twitch",
    execute(message, args) {
        const Discord = require('discord.js');
        message.delete().catch(error => console.log(err));
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('That\'s sick')
            .setURL('https://twitch.tv/kazuru_tv/')
            .setAuthor('Kazuru is now live on Twitch!')
            .setImage('https://cdn.discordapp.com/attachments/696678622865522719/984512107536076871/Kazuru.png')
            .setTimestamp()

        message.channel.send(exampleEmbed);

    }
}