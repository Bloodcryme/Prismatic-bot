const { clear } = require('console');
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const prefix = "!";
const config = require('./config.json');
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

// bot on + activity
client.on('ready', () => {
    console.log('Prismatic bot is online')
    client.user.setActivity('Mass Effect™ Legendary Edition', { type: "PLAYING"})
});

//chat commands
client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'purge'){
        client.commands.get('purge').execute(message, args);
    } else if(command === 'dog' || command === 'dogs' || command === 'doggo' || command === 'goodboi'){
        client.commands.get('dog').execute(message, args);
    } else if(command === 'balance' || command === 'balancedruid' || command === 'boomie' || command === 'starfall'){
        client.commands.get('balancedruid').execute(message, args);
    } else if(command === 'convoke'){
        client.commands.get('convoke').execute(message, args);
    } else if(command === 'nuggies' || command === 'chickennuggets' || command === 'chickynuggies'){
        client.commands.get('nuggies').execute(message, args);
    } else if(command === 'handholding'){
        client.commands.get('handholding').execute(message, args);
    } else if(command === 'thecouncil' || command === 'the council' || command === 'council'){
        client.commands.get('thecouncil').execute(message, args, Discord);
    } else if(command === 'fatescribe'){
        client.commands.get('fatescribe').execute(message, args, Discord);
    } else if(command === 'trialinfo'){
        client.commands.get('trialinfo').execute(message, args, Discord);
    } else if(command === 'trialinfopic'){
        client.commands.get('trialinfopic').execute(message, args, Discord);
    } else if(command === 'information'){
        client.commands.get('information').execute(message, args, Discord);
    } else if(command === 'painsmith'){
        client.commands.get('painsmith').execute(message, args, Discord);
    } else if(command === 'sylvanas'){
        client.commands.get('sylvanas').execute(message, args, Discord);
    } else if(command === 'tyrantbugs' || command === 'tyrant bugs' || command === 'vaelus'){
        client.commands.get('vaelustyrant').execute(message, args, Discord);
    } else if(command === 'aboutus'){
        client.commands.get('aboutus').execute(message, args, Discord);
    } else if(command === 'kazuru' || command === 'kaz'){
        client.commands.get('kazurucovenant').execute(message, args, Discord);
    } else if(command === 'dh' || command === 'demonhunters' || command === 'demonhunter'){
        client.commands.get('demonhunters').execute(message, args, Discord);
    } else if(command === 'cat' || command === 'food'){
        client.commands.get('catstickk').execute(message, args, Discord);
    } else if(command === 'baldus'){
        client.commands.get('baldus').execute(message, args, Discord);
    } else if(command === 'commands'){
        client.commands.get('commands').execute(message, args, Discord);
    } else if(command === 'gamz' || command === 'gamzkin'){
        client.commands.get('gamzkin').execute(message, args, Discord);
    } else if(command === 'nirwyn'){
        client.commands.get('nirwyn').execute(message, args, Discord);
    } else if(command === 'halondrus'){
        client.commands.get('halondrus').execute(message, args, Discord);
    } else if(command === 'yeynix' || command === 'nixnix' || command === 'yeyyey'){
        client.commands.get('yeynix').execute(message, args, Discord);
    } else if(command === 'spiteful'){
        client.commands.get('spiteful').execute(message, args, Discord);
    } else if(command === 'anduin'){
        client.commands.get('anduin').execute(message, args, Discord);
    } else if(command === 'sennsay'){
        client.commands.get('sennsay').execute(message, args, Discord);
    } else if(command === 'miso'){
        client.commands.get('miso').execute(message, args, Discord);
    } else if(command === 'feralgamz' || command === 'gamzferal'){
        client.commands.get('feralgamz').execute(message, args, Discord);
    } else if(command === 'unpaidovertime' || command === 'stickk'){
        client.commands.get('stickk').execute(message, args, Discord);
    } else if(command === 'mechanics' || command === 'jailer'){
        client.commands.get('mechanics').execute(message, args, Discord);
    } 
});

//stream chat commands
client.on('message', async message => {
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'say'){
        client.commands.get('say').execute(message, args);
    } else if(command === 'bloodcrymestream'){
        client.commands.get('bloodcrymestream').execute(message, args);
    } else if(command === 'nirwyn_stream'){
        client.commands.get('nirwyn_stream').execute(message, args);
    } else if(command === 'gamzkinstream'){
        client.commands.get('gamzkinstream').execute(message, args);
    } else if(command === 'kazuru_tvstream'){
        client.commands.get('kazuru_tvstream').execute(message, args);
    } else if(command === 'amosesdotastream'){
        client.commands.get('amosesdotastream').execute(message, args);
    } 
})

//Ankh command
client.on('message', async message => {
    if(message.author.bot) return;

    const command = message.content.toLowerCase();

    if(command.includes('ankh') || command.includes('reincarnate')){
        if (Math.random() > 0.33) {
            message.channel.send("CAN ANKH");
        }
        else {
            message.channel.send("ARE YOU SURE?");
    } 
}})

client.login(config.token);