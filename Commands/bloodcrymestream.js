module.exports = {
    name: 'bloodcrymestream',
    description: "Bloodcryme is live on twitch",
    execute(message, args) {
        const Discord = require('discord.js');
        message.delete().catch(error => console.log(err));
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#F58CBA')
            .setTitle('Me yelling at 19 innocent raiders')
            .setURL('https://twitch.tv/bloodcryme/')
            .setAuthor('Bloodcryme is now live on Twitch!')
            .setImage('https://cdn.discordapp.com/attachments/696678981293834270/742205290052714556/unknown.png')
            .setTimestamp()

        message.channel.send(exampleEmbed);

    }
}