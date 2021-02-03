const express = require ("express");
const fs = require('fs');

const DATA_DIR = 'aedb_data';

const app = express();
app.use(express.json());

const hashtable = {};

app.post('memory/:key', (req, res) => {
	hashtable[req.params.key] = req.body.data;
	res.send();
});

app.get('memor/:key', (req, res) => {
	const key = req.params.key;
	if (key in hashtable) {
		res.send(hashtable[key]);
		return;
	}
});