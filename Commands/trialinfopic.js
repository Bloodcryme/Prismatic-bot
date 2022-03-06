module.exports= {
    name: 'trialinfopic',
    description: "picture for trial info channel",
    execute(message, args){
        message.channel.send({files: ["./Images/trialinfo.png"]});

    }
}