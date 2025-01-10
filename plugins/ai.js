import { haki } from '#lib';
import { NIKKA } from '#utils';

haki(
	{
		pattern: 'ai',
		public: true,
		desc: 'Chat with an AI Bot',
		type: 'ai',
	},
	async (message, match) => {
		const msg = await message.send('*analysing*');
		const res = await NIKKA.chatbot(match || message.reply_message.text);
		return await msg.edit(res);
	},
);
