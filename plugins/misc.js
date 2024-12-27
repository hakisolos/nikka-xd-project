import { extractUrlFromString, getJson } from 'xstro-utils';
import { haki, getUsers } from '#lib';
import config from '#config';
import { NIKKA } from '#utils';

haki(
	{
		pattern: 'pair',
		public: true,
		desc: 'Get Your Pairing Code Now',
		type: 'help',
	},
	async (message, match) => {
		const jid = await message.getUserJid(match);
		if (!jid)
			return message.send(
				'_Give me the number that needs pairing code_',
			);
		const id = jid.split('@')[0];
		const msg = await message.send('*Getting Pairing Code*');
		const res = await getJson(
			`https://NIKKAsession.onrender.com/pair?phone=${id}`,
		);
		if (!res.code)
			return message.send(
				'*unable to get a pairing code, try again!*',
			);
		return await msg.edit('```Pairing CODE:\n' + res.code + '```');
	},
);
/*
bot(
	{
		pattern: 'support',
		public: true,
		desc: 'Sends developer support information ',
		type: 'help',
	},
	async message => {
		const supportMessage = `╭─── *🔰 DEVS SUPPORT 🔰* ────╮  
│  
│ *📱 WhatsApp Channel:* https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j \n
│ *💬 Testing Group:*   https://chat.whatsapp.com/HIvICIvQ8hL4PmqBu7a2C6\n
│ *🐙 GitHub Repository:* https://github.com/AstroX11/NIKKA.git \n
│ *✉️ Support Email:* support@NIKKAbot  \n
│  
│ *⚠️ Note:* Please contact us for any issues. We respond within 24 hours.  
│  
╰───────────────────────────╯  
`;
		await message.send(supportMessage);
	},
);

bot(
	{
		pattern: 'users',
		public: true,
		desc: 'Get Total Users',
		type: 'help',
	},
	async message => {
		return await message.send(
			`\`\`\`NIKKA Current Users:\n ${(await getUsers()).users}\`\`\``,
		);
	},
);
*/
haki(
	{
		pattern: 'readmore',
		public: true,
		desc: 'Adds *readmore* in given text.',
		type: 'tools'
	},
	async (message, match) => {
		if (!match) return await message.send('*Give me text!*');
		const [text1, text2] = match.split(';');
		if (!text2) return await message.send('*Format: text1;text2*');
		return await message.send(
			text1 + String.fromCharCode(8206).repeat(4001) + `\n${text2}`,
		);
	},
);



haki(
	{
		pattern: 'link',
		public: true,
		desc: 'Shortens a url',
		type: 'tools',
	},
	async (message, match) => {
		if (!match || !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(match))
			return message.send('*Please provide a valid URL*');
		const msg = await message.send('*Shortening URL...*');
		const url = extractUrlFromString(match);
		const res = await NIKKA.short(url);
		if (!res) return await msg.edit('*Failed to shorten URL*');
		return await msg.edit(`*Shortened URL:* ${res}`);
	},
);
