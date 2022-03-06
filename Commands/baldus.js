module.exports= {
    name: 'baldus',
    description: "vaelus meme",
    execute(message, args){
        message.channel.send({files: ["./Images/baldus.png"]});

    }
}