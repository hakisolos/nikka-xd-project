import { haki } from '#lib';
import { NIKKA } from '#utils';

haki(
	{
		pattern: 'facts',
		public: true,
		desc: 'Get random facts',
		type: 'fun',
	},
	async message => {
		return await message.send(`\`\`\`${await NIKKA.facts()}\`\`\``);
	},
);

haki(
	{
		pattern: 'quotes',
		public: true,
		desc: 'Get random quotes',
		type: 'fun',
	},
	async message => {
		return await message.send(`\`\`\`${await NIKKA.quotes()}\`\`\``);
	},
);

haki(
	{
		pattern: 'advice',
		public: true,
		desc: 'Get random advice',
		type: 'fun',
	},
	async message => {
		return await message.send(`\`\`\`${await NIKKA.advice()}\`\`\``);
	},
);

haki(
	{
		pattern: 'rizz',
		public: true,
		desc: 'Get random rizz',
		type: 'fun',
	},
	async message => {
		return await message.send(`\`\`\`${await NIKKA.rizz()}\`\`\``);
	},
);

haki(
	{
		pattern: 'bible',
		public: true,
		desc: 'Get random bible verse',
		type: 'search',
	},
	async (message, match) => {
		if (!match)
			return await message.send('Please provide a verse:\n.john3:16');
		return await message.send(
			`\`\`\`${await NIKKA.bible(match.trim())}\`\`\``,
		);
	},
);

haki(
	{
		pattern: 'fancy',
		public: true,
		desc: 'Convert text to fancy text',
		type: 'tools',
	},
	async (message, match) => {
		if (!match) return await message.send('Please provide a text');
		return await message.send(await NIKKA.fancy(match));
	},
);
