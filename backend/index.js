const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const banjangRouter = require('./routers/banjang.router');

app.use(express.json());
app.use(cors());

app.use('/', banjangRouter);

app.use(express.static(path.join(__dirname, 'view')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.listen(port, () => {
    console.log(`서버실행 ${port}`);
});