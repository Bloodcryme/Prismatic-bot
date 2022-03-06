const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'dog',
    description: 'Post a dog picture',
    execute(message, args) {
        const { image } = fetch('https://random.dog/woof.json')
        .then(response => response.json())
        .then(data => message.channel.send(data.url))
    }
};

