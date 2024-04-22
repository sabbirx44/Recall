const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/data', (req, res) => {
    res.send('More data coming soon.')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})