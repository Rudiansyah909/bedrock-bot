//  do not edit anything just edit the host, port and username
// if you use this for aternos im not really recommend to use this this is build for Anarchy bedrock server
// if you keep using this for aternos and get ban im DO NOT responsible for this
const { createBot, GoalBlock } = require('bedrockflayer')

const bot = createBot({
  host: 'localhost',     // BDS server IP
  port: 19132,           // Bedrock port
  username: 'jshdkkdkdkd19121',     // Display name
  offline: true        // Skip Xbox Live auth
})

bot.on('spawn', () => {
  console.log('Bot spawned!')
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
})

  while (true) {
    bot.chat('Hello from bedrockflayer!')
    await sleep(10000);
  }
