const router = require('express').Router();
const items = require('./public/src/items.json');

router.get('/', (req, res, next) => {
    res.render('pages/index', {
        status: 'success',
        message: 'Welcome to Express JS',
        path: req.path
    });
})

router.get('/products/:id', (req, res) => {
    res.render('pages/item', {
        id: req.params.id,
        item: items.data[req.params.id - 1],
        path: req.path.slice(0, 9)
    })
});

router.get('/products', (req, res, next) => {    
    res.render('pages/products', { data: items.data, path: req.path });
})

router.get('/about', (req, res) => {
    // res.json({
    //     path: req.path
    // })
    res.render('pages/about', { data: items.socmed, path: req.path })
})

module.exports = router;