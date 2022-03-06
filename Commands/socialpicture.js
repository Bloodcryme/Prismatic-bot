module.exports= {
    name: 'socialpicture',
    description: "picture for socials",
    execute(message, args){
        message.channel.send({files: ["./Images/socials.png"]});

    }
}