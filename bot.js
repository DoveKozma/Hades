const Discord = require('discord.js');
const { prefix, token } = require('./config.json'); 
const client = new Discord.Client(); 

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    //console.log(message.content);

    if(message.content.startsWith(`${prefix}Sever`)) {

        //message.channel.send("It shall be done my lord.")

        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send("Bleed in the dark ocean of hell." + "Thou soul shall perish.")
        })
    }
})
client.login(token);

client.on('message', message => {
    //console.log(message.content); 
    
    if(message.content.startsWith(`${prefix}Welcome_to_my_Casino`)) {

        //message.channel.send("If I'm here doesn't that mean we have to start the final plan?")
    }
})

client.on('message', message => {
    //console.log(message.content); 
    
    if(message.content.startsWith(`${prefix}For_now_please_continue_to_spy_on_the_designated_servers`)) {

        message.channel.send("I shall do as you command my Lord.")
    }
})
client.on('message', message => {
    if(message.content.startsWith(`${prefix}Slay`)) {
        let member = message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send("No one escapes death." + "Your soul is mine.")
        })
        }

})
client.on('message', message => {
    console.log(message.content);
})

client.on('message', message => {
    //console.log(message.content); 
    
    if(message.content.startsWith(`${prefix}Thanks`)) {

        //message.channel.send("Your welcome Father.")
    }
})
