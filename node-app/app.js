const express = require('express');
const app = express();

app.use('/app', (req, res) => {
    console.log('Salom');
    return res.status(200).send('Serverdan javob');
});

app.listen(3000, () => {
    console.log('Server 3000 porta ishga tushdi');
});