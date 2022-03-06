module.exports= {
    name: 'rolespicture',
    description: "picture for roles channel",
    execute(message, args){
        message.channel.send({files: ["./Images/roles.png"]});

    }
}