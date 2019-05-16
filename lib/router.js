var express = require('express');
var router = express.Router();
var pagePost = require('./pagePost');


router.get('/ping', (req, res, next) => {
    res.send('ok');
});

router.get('/', pagePost.findAll);

router.post('/p', pagePost.insert);


router.get('/p/:pID', pagePost.getByID)


router.get('/p/:pID/remove', pagePost.remove)

router.post('/p/:pID/update', pagePost.update);

module.exports = router;