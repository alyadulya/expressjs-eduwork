const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(router);
app.use((req, res, next) => {
    res.status(404);
    res.send({
        status: 'failed',
        message: `Resource ${req.originalUrl} not found`
    });
});
app.listen(process.env.PORT || 3000, () => console.log('Server: http://localhost:3000'));