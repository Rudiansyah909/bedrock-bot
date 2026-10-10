const { createBot } = require('bedrockflayer'); // Use 'mineflayer' for Java Edition
const { GoogleGenAI } = require('@google/genai');

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: 'YOUR_GEMINI_API_KEY_HERE' }); // gemini api here

// Create the Bedrock bot (adjust host, port, and offline/online settings)
const bot = createBot({
    host: 'YOUR_SERVER_IP', // e.g., ://yourserver.com
    port: 19132,            // Bedrock server port (Java is usually 25565)
    username: 'Randomizer_aichatbot',
    offline: false          // Set to true if it's an offline/cracked server
});

bot.on('spawn', () => {
    console.log('Bot has spawned and connected to the server!');
    bot.chat('Hello! I am an AI bot powered by Gemini. To Start Use !ai <question>');
});

// Listen to in-game chat
bot.on('chat', async (username, message) => {
    // Ignore messages sent by the bot itself
    if (username === bot.username) return;

    // Trigger keyword or respond to everything starting with "!ai"
    if (message.startsWith('!ai ')) {
        const promptText = message.slice(4); // Remove '!ai ' prefix
        
        try {
            bot.chat('Thinking...');
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: promptText,
            });

            const reply = response.text || 'I have no response.';
            // Minecraft chat length limits apply, slice if too long
            bot.chat(reply.substring(0, 256));
        } catch (error) {
            console.error('Error communicating with Gemini:', error);
            bot.chat('Sorry, I had trouble thinking about that.');
        }
    }
});
