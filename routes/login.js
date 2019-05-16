var express = require('express');
var router = express.Router();

// 登录页面
router.get('/login', (req, res) => {
    res.render('login', {
        title: '登录'
    });
});

module.exports = router;