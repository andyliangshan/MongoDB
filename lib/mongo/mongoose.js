var mongoose = require('mongoose');
var  Promise  = require('bluebird');

mongoose.Promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Connection Error:' + err)
    } else {
        console.log('Connection success!')
    }
});

var blogSchema = new mongoose.Schema({
    content: { type: String, unique: true },
    date: String
}, { collection: 'post' });

var post = mongoose.model('post', blogSchema);

module.exports = post;