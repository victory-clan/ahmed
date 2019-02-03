const Discord = require("discord.js");
const client = new Discord.Client();
const Bako = ['406876486880985141','406876486880985141'];


  client.on('message',Bako => {
    var argresult = Khaled.content.split(` `).slice(1).join(' ');
      if (!iKhaled.includes(Khaled.author.id)) return;
  
      if (Khaled.content.startsWith('!wt')) {
        client.user.setActivity(argresult, {type:'WATCHING'});
          client.user.setStatus("dnd")
          Khaled.channel.send(` ** Done. :white_check_mark: ** `)
      } else //Bako
      if (Khaled.content.startsWith('!ls')) {//Bako
          client.user.setActivity(argresult , {type:'LISTENING'});
            client.user.setStatus("idle")
            Khaled.channel.send(` ** Done. :white_check_mark: ** `)
      } else //Bako
          if (Khaled.content.startsWith('!st')) {
            client.user.setGame(argresult, "https://www.twitch.tv/ikhaled321");
              client.user.setStatus("dnd")
              Khaled.channel.send(` ** Done. :white_check_mark: ** `)//Bako
      } else 
      if (Khaled.content.startsWith('!pl')) {
        client.user.setActivity(argresult , {type:'PLAYING'});//Bako
         client.user.setStatus("idle")
         Bako.channel.send(` ** Done. :white_check_mark: ** `)
       }
  
  });

client.login(process.env.BOT_TOKEN);
