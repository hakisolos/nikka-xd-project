import { haki } from '#lib';
import { apkDl, NIKKA } from '#utils';
import {
	extractUrlFromString,
	FileTypeFromBuffer,
	getBuffer,
} from 'xstro-utils';

haki(
	{
		pattern: 'apk',
		public: true,
		desc: 'Downloads Apk',
		type: 'download',
	},
	async (message, match) => {
		if (!match) return message.send('_Provide Apk to Download_');
		const res = await apkDl(match);
		const { appname, link } = res;
		const buff = await getBuffer(link);
		return await message.sendMessage(buff, {
			type: 'document',
			mimetype: 'application/vnd.android.package-archive',
			fileName: appname + '.apk',
		});
	},
);

haki(
	{
		pattern: 'facebook',
		public: true,
		desc: 'Download Facebook Video',
		type: 'download',
	},
	async (message, match) => {
		let url = match || message.reply_message?.text;
		if (!url) return message.send('_Provide Facebook link_');
		url = extractUrlFromString(url);
		const media = await NIKKA.facebook(url);
		return await message.send(media);
	},
);

haki(
	{
		pattern: 'instagram',
		public: true,
		desc: 'Download Instagram Video',
		type: 'download',
	},
	async (message, match) => {
		let url = match || message.reply_message?.text;
		if (!url) return message.send('_Provide Instagram link_');
		url = extractUrlFromString(url);
		const media = await NIKKA.instagram(url);
		return await message.send(media, { type: 'video' });
	},
);

haki(
	{
		pattern: 'twitter',
		public: true,
		desc: 'Download Twitter Video',
		type: 'download',
	},
	async (message, match) => {
		let url = match || message.reply_message?.text;
		if (!url) return message.send('_Provide Twitter link_');
		url = extractUrlFromString(url);
		const media = await NIKKA.twitter(url);
		return await message.send(media, { type: 'video' });
	},
);

haki(
	{
		pattern: 'yta',
		public: true,
		desc: 'Download Youtube Audio',
		type: 'download',
	},
	async (message, match) => {
		let url = match || message.reply_message?.text;
		if (!url) return message.send('_Provide Youtube link_');
		url = extractUrlFromString(url);
		const media = await NIKKA.youtube(url, { mp3: true });
		return await message.send(media.url);
	},
);

haki(
	{
		pattern: 'ytv',
		public: true,
		desc: 'Download Youtube Video',
		type: 'download',
	},
	async (message, match) => {
		let url = match || message.reply_message?.text;
		if (!url) return message.send('_Provide Youtube link_');
		url = extractUrlFromString(url);
		const media = await NIKKA.youtube(url, { mp4: true });
		return await message.send(media.url, {
			type: 'video',
			caption: media.title,
		});
	},
);

haki(
	{
		pattern: 'tiktok',
		public: true,
		desc: 'Download Tiktok Video',
		type: 'download',
	},
	async (message, match) => {
		let url = match || message.reply_message?.text;
		if (!url) return message.send('_Provide Tiktok link_');
		url = extractUrlFromString(url);
		const media = await NIKKA.tiktok(url);
		return await message.send(media.url, { caption: media.title });
	},
);

haki(
	{
		pattern: 'mediafire',
		public: true,
		desc: 'Downloads Mediafire files from url',
		type: 'download',
	},
	async (message, match) => {
		let url = match || message.reply_message?.text;
		if (!url) return message.send('_Provide Mediafire link_');
		url = extractUrlFromString(url);
		const media = await NIKKA.mediafire(url);
		const buff = await getBuffer(media.link);
		const type = await FileTypeFromBuffer(buff);
		return await message.sendMessage(buff, {
			type: 'document',
			mimetype: res.mime[0],
			fileName: 'file' + type,
		});
	},
);
