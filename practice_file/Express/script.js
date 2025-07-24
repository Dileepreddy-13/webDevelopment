const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/:username', (req, res) => {
    let {username} = req.params;
    console.log(username);
    res.send(`Welcome to @${username}'s page`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
