const { Client, RichEmbed, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Bot está ready como ${client.user.tag}!`);
    client.user.setStatus('online');

    console.log(client.user.presence.status);

    //const testChannel = client.channels.find(channel => channel.name === 'test');
    //console.log(testChannel)
});

client.on('message', async message => {
    //Receiving the message
    console.log(message.content);
    if(message.content === 'nazi'){
        message.reply('...');
    }

    if(message.content === 'hola' || message.content === 'Hola' || message.content === 'HOLA'){
        message.channel.send(`${message.author} Hola Pa`);
    }

    if(message.content === 'chau' || message.content === 'Chau'){
        message.channel.send(`${message.author} Chau Pa`);
    }

    if(message.content.includes('!jaja')){
        message.channel.send('Buenardoooo');
    }

    if(message.content.includes('japon') ||  message.content.includes('anime') ||  message.content.includes('corea') || message.content.includes('dorama')){
        message.channel.send('Malardoooo');
    }

    if(message.content.includes('malardo') ||  message.content.includes('Malardo') ||  message.content.includes('down') || message.content.includes('Down') || message.content.includes('silencio')){
        message.channel.send('CALLA BOCA MONO IDIOTA');
    }
    if(message.content === '!help') {
        const embed = new MessageEmbed()
            .setTitle('Si escribis esto Axelote dice:')
            //.setColor(0xFF0000)
            .setColor('RED')
            .setAuthor('Bot', 'https://image.freepik.com/vector-gratis/cara-mono-sobre-fondo-blanco_1308-19884.jpg')
            .addField('nazi', '...')
            .addField('japon, anime, corea, dorama', 'Malardo')
            .addField('Silencio', 'Calla Boca Mono Idiota')
        message.channel.send(embed);
    }

    if (message.content === '!clear'){
        //const fetched = await message.channel.fetchMessages({limit: 10});
        const fetched = await message.channel.messages.fetch({limit: 100});
        message.channel.bulkDelete(fetched);
        console.log('Messages Deleted');
    }
});

//client.login(--> Update here 'Discord Token')