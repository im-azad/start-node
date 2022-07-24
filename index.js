//basic
const express = require('express');
const app = express();
const port = 5000; //process.env.PORT || 3000;

// data of users
const users = [
	{ id: 1, name: 'Sakil', email: 'sakil@gmail.com', phone: '01711000001' },
	{ id: 2, name: 'Sagor', email: 'sagor@gmail.com', phone: '01711000002' },
	{ id: 3, name: 'Azad', email: 'azad@gmail.com', phone: '01711000003' },
	{ id: 4, name: 'Alamin', email: 'alamin@gmail.com', phone: '01711000004' },
	{ id: 5, name: 'Saif', email: 'saif@gmail.com', phone: '01711000006' },
];
app.get('/', (req, res) => {
	res.send('Hello Azad');
});
// query parameter
app.get('/users', (req, res) => {
	// console.log(req.query);
	const search = req.query.search;
	if (search) {
		const searchResult = users.filter((user) =>
			user.name.toLowerCase().includes(search)
		);
		res.send(searchResult);
	} else {
		res.send(users);
	}
});

// users data dynamic api
app.get('/users/:id', (req, res) => {
	// console.log(req.params.id);
	const index = req.params.id;
	const user = users[index];
	// console.log(user);
	res.send(user);
});

// basic
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
