module.exports = {
    name: 'nirwyn_stream',
    description: "Nirwyn is live on twitch",
    execute(message, args) {
        const Discord = require('discord.js');
        message.delete().catch(error => console.log(err));
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#522785')
            .setTitle('haha Eye Beam go brrr')
            .setURL('https://twitch.tv/Nirwyn_/')
            .setAuthor('Nirwyn is now live on Twitch!')
            .setImage('https://cdn.discordapp.com/attachments/736875465532243999/792199420749807647/Stream_preview.png')
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
}