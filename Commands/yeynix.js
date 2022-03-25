module.exports= {
    name: 'yeynix',
    description: "yeynix meme pic",
    execute(message, args){
        message.channel.send({files: ["./Images/nixnix.png"]});

    }
}