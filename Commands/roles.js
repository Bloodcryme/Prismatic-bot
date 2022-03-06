module.exports= {
    name: 'roles',
    description: "roles message + reactions",
    execute(message, args){
        message.delete().catch(error => console.log(err));
        const classSelect = ('Select your class (you can only choose one; it changes the color of your server nickname).');
        message.channel.send(classSelect) .then(classSelect => {
            classSelect.react("854924691730071573")
            classSelect.react("854924725012398101")
            classSelect.react("854924940768051210")
            classSelect.react("854925001366175764")
            classSelect.react("854925040226664478")
            classSelect.react("854925064465940510")
            classSelect.react("854925139602047006")
            classSelect.react("854925185144979456")
            classSelect.react("854925218345779250")
            classSelect.react("854925243260207104")
            classSelect.react("854925282389131275")
            classSelect.react("854925300328693760");
        })
    }
}