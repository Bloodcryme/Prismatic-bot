module.exports= {
    name: 'applypicture',
    description: "picture for applicants",
    execute(message, args){
        message.channel.send({files: ["./Images/applications.png"]});

    }
}