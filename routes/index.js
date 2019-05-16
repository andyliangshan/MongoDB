var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  post.find({}, (err, docs) => {
    if (err) {
      console.error(err);
      return;
    } else {
      res.render('index', { title: '梁山伯博客首页', name: '博客', content: docs.reverse() });
    }
  });

});

// 登录页面
router.get('/login', (req, res, next) => {
  res.render('login', {
      title: '登录'
  });
});

// 注册页面
router.get('/signup', (req, res, next) => {
  res.render('signup', {
      title: '注册'
  });
});

router.post('/add', (req, res, next) => {
  var content = req.body.content;
  var date = req.body.date;

  if (!content) {
    return res.json({
      status: -1,
      message: '博客内容不能为空'
    });
  }

  if (content && date) {
    var newPost = new post({
      content: content,
      date: date
    });
  }

  newPost.save(err => {
    if (err) {
      console.log(new Error(err));
      return;
    } else {
      return res.json({
        status: 200,
        message: '保存成功！'
      });
    }
  });
});

router.post('/del', (req, res, next) => {
  var deleteContent = req.body.deleteContent;
  if (deleteContent) {
    post.remove({ content: deleteContent }, err => {
      if (err) {
        console.error(err);
        return;
      }
      return res.json({
        status: 200,
        message: '删除成功！'
      });
    });
  } else {
    return res.json({
      status: -1,
      message: '删除失败，请重试！'
    });
  }
});

router.post('/edit', (req, res, next) => {
  var oldContent = req.body.oldContent,
    updateContent = req.body.updateContent;

  if (oldContent && updateContent) {
    post.update({ content: oldContent }, { $set: { 'content': updateContent } }, err => {
      if (err) {
        console.error(err);
        return;
      }
      return res.json({
        status: 200,
        message: '更新成功！'
      });
    });
  }
});

module.exports = router;
