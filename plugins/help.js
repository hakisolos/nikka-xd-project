import { haki, numtoId } from '#lib';
import { readFileSync } from 'fs';

haki(
	{
		pattern: 'report',
		public: true,
		desc: 'Request Feature or Report Bugs',
		type: 'help',
	},
	async (message, match) => {
		if (!match || match.split(' ').length < 5)
			return message.send(
				'```Please provide a reason with at least 5 words to report a bug.```',
			);

		const errorReport = `\`\`\`
BUG REPORT
FROM: @${message.sender.split('@')[0]}
MESSAGE: \n${match}
\`\`\``;

		const devs = [
			'2349112171078',
			'2349112171078',
			'2349112171078',
			'2349112171078',
		];
		for (const dev of devs) {
			await message.send(errorReport, {
				jid: numtoId(dev),
				mentions: [message.sender],
			});
		}
	},
);

haki(
	{
		pattern: 'repo',
		public: true,
		desc: 'Bot info, social links, and GitHub repo.',
		type: 'help'
	},
	async message => {
		const adMessage = `\`\`\`
ᴛʜᴀɴᴋ ʏᴘᴜ ғᴏʀ ᴄʜᴏᴏsɪɴɢ ɴɪᴋᴋᴀ ᴍᴅ


ᴅᴇᴠᴇʟᴏᴘᴇʀs:
> ʜᴀᴋɪ xᴇʀ
> ᴘᴀʀᴀᴅᴏxɪᴄᴀʟ
> xᴄᴇʟsᴀᴍᴍᴀ
> ᴘᴀʙʟᴏ ɴᴀxᴏʀ

ʀᴇᴘᴏsɪᴛᴏʀʏ: https://github.com/hakisolos/nikka-md
© ɴɪᴋᴋᴀ ʙᴏᴛᴢ ɪɴᴄ
\`\`\``;

		const media = readFileSync('./media/thumb.jpg');
		return await message.send(media, {
			caption: adMessage,
			//gifPlayback: true,
			contextInfo: {
				forwardingScore: 1,
				isForwarded: true,
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363376441437991@newsletter',
					newsletterName: 'ɴɪᴋᴋᴀ ᴍᴅ',
				},
			},
		});
	},
);
