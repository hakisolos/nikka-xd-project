import dotenv from 'dotenv';
dotenv.config();

const config = {
	SESSION_ID: process.env.SESSION_ID || '',
	API_KEY: process.env.API_KEY || 'nikka',
	SUDO: process.env.SUDO || '',
	API_ID: process.env.API_ID || 'https://nikka-api.us.kg',
	BOT_INFO: process.env.BOT_INFO || 'hakisolos;nikka-md',
	STICKER_PACK: process.env.STICKER_PACK || 'H4KI;XER',
	WARN_COUNT: process.env.WARN_COUNT || 3,
	TIME_ZONE: process.env.TIME_ZONE || 'Africa/Lagos',
	VERSION: '1.1.9',
};
export { config };
export default config;
