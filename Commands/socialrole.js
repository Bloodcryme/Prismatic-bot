module.exports= {
    name: 'socialrole',
    description: "social role message",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#64C5EB')
        .setTitle('If you\'re a social:')
        .setDescription('Start your Discord experience by reacting with <:Prismatic:855012892281929738>')
        message.channel.send(newEmbed) .then(roleSelect => {
        roleSelect.react("855012892281929738");
        })
    }
}