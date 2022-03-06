module.exports = {
    name: 'naethyrastream',
    description: "Naethyra is live on twitch",
    execute(message, args) {
        const Discord = require('discord.js');
        message.delete().catch(error => console.log(err));
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00adb5')
            .setTitle('Naethyra has gone live')
            .setURL('https://twitch.tv/naethyra/')
            .setAuthor('Naethyra is now live on Twitch!')
            .setImage('https://static-cdn.jtvnw.net/previews-ttv/live_user_naethyra-1000x600.jpg')
            .setTimestamp()

        message.channel.send(exampleEmbed);

    }
}