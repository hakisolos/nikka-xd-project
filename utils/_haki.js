import config from '#config';
import { getBuffer, getJson } from 'xstro-utils';

const { API_ID, API_KEY } = config;


const NIKKA = {
	facebook: async url => {
		const res = await getJson(
			`${API_ID}/dl/fb?url=${encodeURIComponent(url)}&apiKey=${API_KEY}`,
		);
		return res.url;
	},
	instagram: async url => {
		const res = await fetch(`https://server-j264.onrender.com/dl/insta?url=${url}`);
		const json = await res.json();
		const bufferRes = await fetch(json.url);
		const data = await bufferRes.arrayBuffer();
		const dataBuffer = Buffer.from(data);
		return dataBuffer;
	},
	twitter: async url => {
		const res = await getJson(`https://server-j264.onrender.com/dl/twitter?url=${url}`);
		return await getBuffer(res.url);
	},
	youtube: async (url, type = {}) => {
		if (type.mp4) {
			const res = `https://server-j264.onrender.com/dl/ytmp4?url=${url}`;
			const data = await getJson(res);
			return {
				title: data.title,
				thumb: data.thumbnail,
				url: data.url,
			};
		} else if (type.mp3) {
			const res = await getJson(`https://server-j264.onrender.com/dl/ytmp3?url=${url}`);
			return {
				title: res.title,
				thumb: res.thumbnail,
				url: res.link,
			};
		}
	},
	tiktok: async url => {
		const res = `https://server-j264.onrender.com/dl/tiktok?url=${url}`;
		const data = await getJson(res);
		return {
			title: data.title,
			url: data.url,
		};
	},
	chatbot: async text => {
		if (!text) return `_How can I help you today?_`;
		const res = await getJson(`${API_ID}/ai/moshai?q=${text}&apiKey=${API_KEY}`);
		return res.data;
	},
	facts: async () => {
		const res = `https://server-j264.onrender.com/api/facts`;
		const data = await getJson(res);
		return data.fact;
	},
	quotes: async () => {
		const res = `https://server-j264.onrender.com/api/quotes`;
		const data = (await getJson(res)).quote;
		return `Quote: ${data.quote}\n\nAuthor: ${data.author}`;
	},
	advice: async () => {
		const res = `https://server-j264.onrender.com/api/advice`;
		const data = await getJson(res);
		return data.advice;
	},
	rizz: async () => {
		const res = `https://server-j264.onrender.com/api/rizz`;
		const data = await getJson(res);
		return data.text;
	},
	bible: async verse => {
		const res = `https://server-j264.onrender.com/api/bible?verse=${verse}`;
		const data = await getJson(res);
		return data.text;
	},
	fancy: async text => {
		const res = await getJson(`https://server-j264.onrender.com/api/fancy?text=${text}`);
		return res.result;
	},
	short: async url => {
		const res = await getJson(`https://server-j264.onrender.com/api/tinyurl?url=${url}`);
		return res.result;
	},
	generatePdf: async content => {
		if (!content) return '_No content provided_';
		return await getBuffer(
			`https://server-j264.onrender.com/api/textToPdf?content=${encodeURIComponent(content)}`,
		);
	},
	maths: async expression => {
		const res = await getJson(
			`https://server-j264.onrender.com/api/solveMath?expression=${expression}`,
		);
		return res.result;
	},
	searchSticker: async query => {
		const res = await getJson(`https://server-j264.onrender.com/api/ssticker?query=${query}`);
		return res.sticker;
	},
	obfuscate: async code => {
		if (!code) return 'Provide a code to obfuscate';
		const res = await getJson(`https://server-j264.onrender.com/api/obfuscate?code=${code}`);
		return res.result;
	},
	ttp: async text => {
		const res = await getJson(`https://server-j264.onrender.com/api/ttp?text=${text}`);
		return await getBuffer(res[0].url);
	},
	gitstalk: async username => {
		const res = await getJson(
			`https://server-j264.onrender.com/api/gitstalk?username=${username}`,
		);
		return res;
	},
	makeSticker: async (
		url,
		pack = config.STICKER_PACK.split(';')[0],
		author = config.STICKER_PACK.split(';')[1],
	) => {
		return fetch(
			`https://server-j264.onrender.com/api/sticker?url=${encodeURIComponent(
				url,
			)}&packname=${pack}&author=${author}`,
		)
			.then(response => {
				if (!response.ok) {
					throw new Error(
						`Failed to fetch sticker: ${response.statusText}`,
					);
				}
				return response.arrayBuffer();
			})
			.then(buffer => Buffer.from(buffer))
			.catch(error => {
				console.error('Error creating sticker:', error.message);
				throw error;
			});
	},
	flipMedia: async (url, direction) => {
		const res = await getBuffer(
			`https://server-j264.onrender.com/api/flip?url=${url}&direction=${direction}`,
		);
		return res;
	},
	blackvideo: async url => {
		const res = await getBuffer(`https://server-j264.onrender.com/api/blackvideo?url=${url}`);
		return res;
	},
	photo: async url => {
		const res = await getBuffer(`https://server-j264.onrender.com/api/photo?url=${url}`);
		return res;
	},
	mp3: async url => {
		const res = await getBuffer(`https://server-j264.onrender.com/api/mp3?url=${url}`);
		return res;
	},
	google: async query => {
		const res = await getJson(`https://server-j264.onrender.com/api/google?query=${query}`);
		return res.result;
	},
	translate: async (text, lang) => {
		const res = await getJson(
			`https://server-j264.onrender.com/api/translate?text=${text}&to=${lang}`,
		);
		return res.result;
	},
	wallpaper: async query => {
		const res = await getJson(`https://server-j264.onrender.com/api/wallpaper?query=${query}`);
		return res;
	},
	wikipedia: async query => {
		const res = await getJson(`https://server-j264.onrender.com/api/wikipedia?query=${query}`);
		return res;
	},
	mediafire: async url => {
		const res = await getJson(`https://server-j264.onrender.com/api/mediafire?url=${url}`);
		return res;
	},
	bing: async query => {
		const res = await getJson(`https://server-j264.onrender.com/api/bing?query=${query}`);
		return res.result;
	},
	news: async () => {
		return await getJson(`https://server-j264.onrender.com/api/technews`);
	},
	forex: async type => {
		const res = await getJson(`https://server-j264.onrender.com/api/${type}`);
		return res;
	},
	yahoo: async query => {
		const res = await getJson(`https://server-j264.onrender.com/api/yahoo?query=${query}`);
		return res.result;
	},
	animenews: async () => {
		return await getJson(`https://server-j264.onrender.com/api/animenews`);
	},
	footballnews: async () => {
		return await getJson(`https://server-j264.onrender.com/api/footballnews`);
	},
	meme: async (text, type) => {
		const res = await getBuffer(
			`https://server-j264.onrender.com/api/meme/${type}?text=${encodeURIComponent(text)}`,
		);
		return res;
	},
	airquality: async (country, city) => {
		const res = await getJson(`https://server-j264.onrender.com/api/airquality?country=${encodeURIComponent(country)}&city=${encodeURIComponent(city)}`);
		return res;
	},
};

export { NIKKA };
export default NIKKA;
