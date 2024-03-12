const express = require('express');

const app = express();

const ports = process.env.PORT || 3000;

const groceries = [
    {
        id: 1,
        item: 'milk',
    },
    {
        id: 2,
        item: 'bread',
    },
];

app.get('/', (req, res) => {
    res.send(groceries);
});

app.listen(ports,() => console.log(`listening on port ${ports}`));