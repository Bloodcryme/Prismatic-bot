module.exports= {
    name: 'channelaccess',
    description: "Acess to specific channels",
    execute(message, args){
        message.delete().catch(error => console.log(err));
        const roleSelect = ('Select extra channels (you won\'t have access to these text channels unless you have the corresponding role).');
        message.channel.send(roleSelect) .then(roleSelect => {
            roleSelect.react("854962849289207819") //league
            roleSelect.react("854963724900368424") //dota
            roleSelect.react("854969961403645952") //csgo
            roleSelect.react("854969984584122408") //call of duty
            roleSelect.react("854970013826940948") //overwatch
            roleSelect.react("855094347450941460") //valorant
            roleSelect.react("855095034114342952") //apex
            roleSelect.react("854970026352574484") //among us
        })
    }
}