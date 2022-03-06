module.exports= {
    name: 'purge',
    description: "Deletes amount of messages inputted",
    async execute(message, args){
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            const deleteCount = parseInt(args[0], 10);
            const deleteMessage = `Deleted ${deleteCount} messages.`;

            if (!deleteCount || deleteCount > 100 || deleteCount <2) return message.reply('Provide a number between 2 -100.')

            const fetched = await message.channel.messages.fetch({
                limit: deleteCount
            });

            message.channel.bulkDelete(fetched)
            .catch(err => console.log(`Cannot delete messages because of ${err}`))
            .then(() => message.channel.send(deleteMessage));
        } else {
            message.reply('You do not have permission to use this command.');
        }

    }
}