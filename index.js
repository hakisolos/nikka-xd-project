import express from 'express';
import WebSocket from 'ws';
import { config } from 'dotenv';
import { DATABASE } from '#database';
import { envlogger, loadFiles, getSession, connect } from '#lib';
import { config as ws } from '#config';

config();

class Nikka {
	constructor() {
		this.app = express();
	}

	async initialize() {
		console.log('nikka botz inc');
		await DATABASE.sync();
		await this.setupComponents();
		await this.startServer();
	}

	async setupComponents() {
		envlogger();
		await loadFiles();
		await getSession();
		await connect();
		new WebSocket(ws.API_ID);
	}

	async startServer() {
		this.app.get('/', (_, r) => r.json({ alive: true }));
		this.app.listen(process.env.PORT || 8000);
	}
}

const bot = new Nikka();
bot.initialize();

export default Nikka;
