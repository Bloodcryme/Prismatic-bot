module.exports= {
    name: 'thecouncil',
    description: "the council cat picture",
    execute(message, args){
        message.channel.send({files: ["./Images/thecouncil.jpg"]});

    }
}