const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "508167471212265482"; // ايدي السررفر
var channel = "508167471212265484";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Naz , Namlol , Naz , Namlol , Naz , Namlol , Naz , Namlol , Naz , Namlol , Naz , Namlol , Naz**')
    },305);
})

client.login(process.env.BOT_TOKEN)
