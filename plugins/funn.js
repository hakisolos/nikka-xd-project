import { haki } from '#lib';

const heartEmojis = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍'];

//  sleep function
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

haki(
	{
		pattern: 'rainbow',
		public: false,
		type: 'fun',
		desc: 'Sends a sequence of rainbow-colored hearts',
	},
	async message => {
		const initialMessage = await message.send('❤️');

		for (const emoji of heartEmojis) {
			await sleep(800); // Pause for 800ms between updates
			await message.send(emoji, {
				edit: initialMessage.key, // Edit the original message with the new emoji
			});
		}
	},
);

const sadEmojis = [
	'🥺',
	'😟',
	'😕',
	'😖',
	'😫',
	'🙁',
	'😩',
	'😥',
	'😓',
	'😪',
	'😢',
	'😔',
	'😞',
	'😭',
	'💔',
	'😭',
	'😿',
];

haki(
	{
		pattern: 'sad',
		public: false,
		type: 'fun',
		desc: 'Sends a sequence of sad emojis',
	},
	async message => {
		// Send the initial sad emojiiiiiiiiiii
		const initialMessage = await message.send('🥺');

		// Loop through the sad emojis and update the messageeeeeeeeeee
		for (const emoji of sadEmojis) {
			await sleep(700); // Pause for 700ms between updatessssssssss
			await message.send(emoji, {
				edit: initialMessage.key, // Edit the original message with the new emojiiiiiiiii
			});
		}
	},
);
haki(
	{
		pattern: 'world',
		type: 'fun',
		desc: 'send world emojis with your text',
		use: '<text> #world',
	},
	async (message, match) => {
		const regix = /#world/g;
		if (!regix.test(match)) {
			return await message.send(
				'*_Please provide text with #world_*\n> Example: `world of wasi , #xstro`',
			);
		}

		const worldEmojis = ['🌏', '🌍', '🌎'];
		let msg = await message.send(match.replace(regix, worldEmojis[0]));

		for (let i = 0; i < 15; i++) {
			await new Promise(resolve => setTimeout(resolve, 700)); // Sleep for 700ms
			const randomEmoji =
				worldEmojis[Math.floor(Math.random() * worldEmojis.length)];
			await msg.edit(match.replace(regix, randomEmoji));
		}
	},
);

haki(
	{
		pattern: 'solar',
		type: 'fun',
		desc: 'shows solar system animation',
	},
	async message => {
		const frames = [
			'◼️◼️◼️◼️◼️\n◼️◼️◼️◼️☀\n◼️◼️🌎◼️◼️\n🌕◼️◼️◼️◼️\n◼️◼️◼️◼️◼️',
			'◼️◼️◼️◼️◼️\n🌕◼️◼️◼️◼️\n◼️◼️🌎◼️◼️\n◼️◼️◼️◼️☀\n◼️◼️◼️◼️◼️',
			'◼️🌕◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️🌎◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️☀◼️',
			'◼️◼️◼️🌕◼️\n◼️◼️◼️◼️◼️\n◼️◼️🌎◼️◼️\n◼️◼️◼️◼️◼️\n◼️☀◼️◼️◼️',
			'◼️◼️◼️◼️◼️\n◼️◼️◼️◼️🌕\n◼️◼️🌎◼️◼️\n☀◼️◼️◼️◼️\n◼️◼️◼️◼️◼️',
		];

		let msg = await message.send(frames[0]);

		for (const frame of frames) {
			await new Promise(resolve => setTimeout(resolve, 500)); // Sleep for 500ms
			await msg.edit(frame);
		}
	},
);

haki(
	{
		pattern: 'snake',
		type: 'fun',
		desc: 'Show snake room',
	},
	async (message, match) => {
		const snakeFrames = [
			'◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️',
			'◻️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️',
			'◻️◻️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️',
			'◻️◻️◻️️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️',
			'◻️◻️◻️◻️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️',
			'‎◻️◻️◻️◻️◻️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️',
			'◻️◻️◻️◻️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️',
			'◻️◻️◻️◻️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◼️\n◼️◼️◼️◼️◼️',
			'◻️◻️◻️◻️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◼️',
			'◻️◻️◻️◻️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◻️◻️',
			'◻️◻️◻️◻️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◼️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◼️◼️◼️◼️◻️\n◼️◼️◼️◼️◻️\n◻️◼️◼️◼️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◼️◼️◼️◼️◻️\n◻️◼️◼️◼️◻️\n◻️◼️◼️◼️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◻️◼️◼️◼️◻️\n◻️◼️◼️◼️◻️\n◻️◼️◼️◼️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◻️◻️◼️◼️◻️\n◻️◼️◼️◼️◻️\n◻️◼️◼️◼️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◻️◻️◻️◼️◻️\n◻️◼️◼️◼️◻️\n◻️◼️◼️◼️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◻️◻️◻️◻️◻️\n◻️◼️◼️◼️◻️\n◻️◼️◼️◼️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◻️◻️◻️◻️◻️\n◻️◼️◼️◻️◻️\n◻️◼️◼️◼️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◻️◻️◻️◻️◻️\n◻️◼️◼️◻️◻️\n◻️◼️◼️◻️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◻️◻️◻️◻️◻️\n◻️◼️◼️◻️◻️\n◻️◼️◻️◻️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◻️◻️◻️◻️◻️\n◻️◼️◼️◻️◻️\n◻️◻️◻️◻️◻️\n◻️◻️◻️◻️◻️',
			'◻️◻️◻️◻️◻️\n◻️◻️◻️◻️◻️\n◻️◻️◼️◻️◻️\n◻️◻️◻️◻️◻️\n◻️◻️◻️◻️◻️',
		];

		for (const frame of snakeFrames) {
			await new Promise(resolve => setTimeout(resolve, 250));
			await message.send(frame);
		}
	},
);

haki(
	{
		pattern: 'plane',
		type: 'fun',
		desc: 'Shows edits of a plane moving across the screen',
	},
	async (message, match) => {
		const planeFrames = [
			'---------------\n✈-------------\n---------------',
			'---------------\n-✈------------\n---------------',
			'---------------\n--✈-----------\n---------------',
			'---------------\n---✈----------\n---------------',
			'---------------\n----✈---------\n---------------',
			'---------------\n-----✈--------\n---------------',
			'---------------\n------✈-------\n---------------',
			'---------------\n-------✈------\n---------------',
			'---------------\n--------✈-----\n---------------',
			'---------------\n---------✈----\n---------------',
			'---------------\n----------✈---\n---------------',
			'---------------\n-----------✈--\n---------------',
			'---------------\n------------✈-\n---------------',
			'---------------\n-------------✈\n---------------',
		];

		// Send the initial frame and store the message key for editinggg..
		const { key: editKey } = await message.send(planeFrames[0]);

		// Loop through the remaining framees
		for (let i = 1; i < planeFrames.length; i++) {
			await new Promise(resolve => setTimeout(resolve, 700)); // Pause for animation effecttt
			await message.send(planeFrames[i], { edit: editKey }); // Edit the existing message with the next frameee
		}
	},
);

haki(
	{
		pattern: 'hand',
		type: 'fun',
		desc: 'Hand practice edits, 18+',
	},
	async (message, match) => {
		const handFrames = [
			'8✊️===D',
			'8=✊️==D',
			'8==✊️=D',
			'8===✊️D',
			'8==✊️=D',
			'8=✊️==D',
			'8✊️===D',
			'8=✊️==D',
			'8==✊️=D',
			'8===✊️D',
			'8==✊️=D',
			'8=✊️==D',
			'8✊️===D',
			'8=✊️==D',
			'8==✊️=D',
			'8===✊️D',
			'8==✊️=D',
			'8=✊️==D',
			'8✊️===D',
			'8=✊️==D',
			'8==✊️=D',
			'8===✊️D 💦',
			'8==✊️=D💦 💦',
			'8=✊️==D 💦💦 💦',
		];

		// Send the initial frame and store the message key for editing
		const { key: editKey } = await message.send(handFrames[0]);

		// Loop through the remaining frames
		for (let i = 1; i < handFrames.length; i++) {
			await new Promise(resolve => setTimeout(resolve, 300));
			await message.send(handFrames[i], { edit: editKey });
		}
	},
);

haki(
	{
		pattern: 'nikal',
		type: 'fun',
		info: 'show loduu edits',
	},
	async (message, match) => {
		// ASCII art frames for the "nikal" animation
		const nikalFrames = [
			'⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀     ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀  ⠀    ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   get   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__⠀   ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀',
			'⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀  ⠀  ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   out   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__|⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀',
			// Add the rest of the frames here
		];

		const { key: editKey } = await message.send(`\n${nikalFrames[0]}\n`);
		for (let i = 0; i < nikalFrames.length; i++) {
			for (let j = 0; j < nikalFrames.length; j++) {
				await new Promise(resolve => setTimeout(resolve, 500));
				await message.send(`\n${nikalFrames[j]}\n`, {
					edit: editKey,
				});
			}
		}
	},
);
