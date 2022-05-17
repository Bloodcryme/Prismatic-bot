module.exports= {
    name: 'naethmeme',
    description: "naeth meme",
    execute(message, args){
        message.channel.send({files: ["./Images/naethmeme.jpg"]});

    }
}