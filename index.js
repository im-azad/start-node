const express = require('express');
const app = express();
const port = 5000; //process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hi there I am hear to start to learn to node js!');
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
