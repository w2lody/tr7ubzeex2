const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("518518419495059456");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__# Weélcoome To Leaders ..,:crescent_moon: __**`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
