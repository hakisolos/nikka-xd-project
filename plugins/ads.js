import { haki } from '#lib';
import { delay } from 'baileys';

haki(
	{
		pattern: 'advertise',
		public: false,
		isGroup: true,
		desc: 'Create and Share Advertisement Messages to all Your Groups',
		type: 'group',
	},
	async (message, match) => {
		const adMsg = match || message.reply_message?.text;
		if (!adMsg) return message.send('ᴘʀᴏᴠɪᴅᴇ ᴍᴇssᴀɢᴇ ᴛᴏ ᴀᴅᴠᴇʀᴛɪsᴇ');
		const groups = await message.client.groupFetchAllParticipating();
		const groupDetails = Object.values(groups);
		const groupIds = groupDetails.map(group => group.id);
		await message.send(
			`𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁𝗶𝗻𝗴 𝘁𝗼 ${
				groupIds.length
			} 𝗴𝗿𝗼𝘂𝗽𝘀. 𝗘𝘀𝘁𝗶𝗺𝗮𝘁𝗲𝗱 𝗰𝗼𝗺𝗽𝗹𝗲𝘁𝗶𝗼𝗻 ${
				groupIds.length * 1.5
			} seconds`,
		);
		const broadcastMessage =
			`\`\`\`*Broadcast*\n\n*Message:*\`\`\`` + adMsg;
		const messageOptions = {
			forwardingScore: 9999999,
			isForwarded: true,
		};
		for (const groupId of groupIds) {
			await delay(1500);
			await message.client.sendMessage(groupId, {
				text: broadcastMessage,
				contextInfo: messageOptions,
			});
		}
		return await message.send(
			`𝗔𝗱𝘃𝗲𝗿𝘁𝗶𝘀𝗲𝗱 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘀𝗲𝗻𝘁 𝘁𝗼 ${groupIds.length} 𝗴𝗿𝗼𝘂𝗽𝘀`,
		);
	},
);
