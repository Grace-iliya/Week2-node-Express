const express = require('express');
const app = express();

app.use(express.json()); // This allows the app to read data

// 1. GET / -> "My Week 2 API!"
app.get('/', (req, res) => {
    res.send("My Week 2 API!");
});

// 2. POST /user -> Responds "Hello, [name]!"
app.post('/user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send("Missing name or email!");
    }
    res.send(`Hello, ${name}!`);
});

// 3. GET /user/:id -> "User [id] profile"
app.get('/user/:id', (req, res) => {
    res.send(`User ${req.params.id} profile`);
});

app.listen(3000, () => console.log("Server running on port 3000"));