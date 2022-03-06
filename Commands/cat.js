const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'cat',
    description: 'Post a cat picture',
    execute(message, args) {
        const { image } = fetch(' http:\/\/aws.random.cat\/meow')
        .then(response => response.json())
        .then(data => message.channel.send(data.file))
    }
};