//  do not edit anything just edit the host, port, username, and chat
// if you use this for aternos im not really recommend to use this this is build for Anarchy bedrock server
// if you keep using this for aternos and get ban im DO NOT responsible for this
// Enable Crack On Your Bedrock Server Go To Server Properties Then Set crack to true
const { createBot, GoalBlock } = require('bedrockflayer')

const bot = createBot({
  host: 'server_ip_here',     // BDS server IP
  port: 19132,           // Bedrock port
  username: 'jshdkkdkdkd19121',     // Display name
  offline: true        // Skip Xbox Live auth
})

bot.on('spawn', () => {
  console.log('Bot spawned!')
  bot.chat('Meow~~~') 
})

bot.on('chat', (username, message) => {
  console.log(`<${username}> ${message}`)

  if (message === '!health') {
    bot.chat(`HP: ${bot.health}/20 | Food: ${bot.food}/20`)
  }

  if (message === '!pos') {
    const p = bot.entity.position
    bot.chat(`Position: ${p.x.toFixed(1)}, ${p.y.toFixed(1)}, ${p.z.toFixed(1)}`)
  }
  
  if (message === '!serverinfo') {
    bot.chat(`IP: ${SERVER_IP}`);
    bot.chat(`Port: ${data.port.v4 || SERVER_PORT}`);
    bot.chat(`Server Name: ${data.name}`);
    bot.chat(`World Name: ${data.levelname}`);
    bot.chat(`Game Version: ${data.version.minecraft}`);
    bot.chat(`GameMode: ${data.gamemode}`);
    bot.chat(`Players: ${data.players.online} / ${data.players.max}`);
  }
})
