const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Axelote está ready como ${client.user.tag}!`);
});

client.login('NzU3MDIzODc3MTQ1ODIxMjc2.X2aXbQ.t50prrJPvkbXT6rRNVs08h_hJyM');