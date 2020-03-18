const Express = require('express');

const app = new Express();

app.get('/', (req, res) => {
	res.send('hello world');
});

app.listen(3000, '0.0.0.0', () => {
	console.log('server is stared on port 3000.');
});
