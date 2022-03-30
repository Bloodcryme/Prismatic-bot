module.exports= {
    name: 'spiteful',
    description: "spiteful kazuru meme",
    execute(message, args){
        message.channel.send({files: ["./Images/kazuruspiteful.png"]});

    }
}