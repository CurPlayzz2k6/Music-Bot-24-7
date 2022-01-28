const { Client } = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES', 'GUILD_MEMBERS'] });
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

client.on("ready", () => {
	console.log(`Study Station 24/7 đã hoạt động!!!`);
	client.user.setActivity("âm nhạc 24/7", {type: "LISTENING"});
});

client.on("messageCreate", async (msg) => {
	let interval;
	if (msg.author.bot || msg.channel.type == "dm") return;
    if (msg.content.startsWith("start24/7")){
			let stream = ytdl("Link LIVE trên YouTube", { 
				highWaterMark: 100 << 150
			});
			const player = await createAudioPlayer();
			await joinVoiceChannel({
				channelId: "ID kênh voice hoặc kênh stage",
				guildId: msg.guild.id,
				adapterCreator: msg.guild.voiceAdapterCreator
			}).subscribe(player);
			const resource = createAudioResource(stream);
			interval = setInterval(async () => {
				player.play(resource);
			}, 1800000);
    }else if (msg.content.startsWith("stop24/7")){
				interval = clearInterval(interval);
				stream.destroy();
		}
});

//24/7
const website = require("http");
website.createServer((_, res) => res.end("Running")).listen(8080);

client.login("TOKEN của bạn");