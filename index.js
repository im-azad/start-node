const express = require('express');
const app = express();
const port = 5000; //process.env.PORT || 3000;

const users = [
	{ id: 1, name: 'Azad', email: 'azad@gmail.com', phone: '01711000001' },
	{ id: 2, name: 'Kalam', email: 'kalam@gmail.com', phone: '01711000002' },
	{ id: 3, name: 'Abul', email: 'abulazad@gmail.com', phone: '01711000003' },
	{ id: 4, name: 'Alamin', email: 'alamin@gmail.com', phone: '01711000004' },
	{ id: 5, name: 'Abid', email: 'abid@gmail.com', phone: '01711000005' },
	{ id: 6, name: 'Sakil', email: 'sakil@gmail.com', phone: '01711000006' },
	{ id: 7, name: 'Sagor', email: 'sagor@gmail.com', phone: '01711000007' },
	{ id: 8, name: 'Saif', email: 'saif@gmail.com', phone: '01711000008' },
	{ id: 9, name: 'Rahim', email: 'rahim@gmail.com', phone: '01711000009' },
	{ id: 10, name: 'Rabbi', email: 'rabbi@gmail.com', phone: '01711000010' },
];

app.get('/', (req, res) => {
	res.send('Hello world, Node js learning');
});

app.get('/users', (req, res) => {
	res.send(users);
});
app.get('/users/:id', (req, res) => {
	// console.log(req.params.id);
	const index = req.params.id;
	const user = users[index];
	// console.log(user);
	res.send(user);
});
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
