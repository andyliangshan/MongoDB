var express = require('express');
var router = express.Router();

/* GET update page. */
router.get('/', (req, res, next) => {
    res.render('update', { title: '博客更新页', name: '博客更新' });
});

module.exports = router;