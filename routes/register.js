var express = require('express');
var router = express.Router();

// 注册页面
router.get('/signup', (req, res) => {
    res.render('signup', {
        title: '注册'
    });
});

module.exports = router;