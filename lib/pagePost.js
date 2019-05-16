module.exports.insert = (req, res, next) => {
    res.send('ok')
}

module.exports.findAll = (req, res, next) => {
    res.render('index', {
        title: 'express'
    });
}

module.exports.getByID = (req, res, next) => {
    res.render('index', {
        title: 'express'
    });
}

module.exports.remove = (req, res, next) => {
    res.send('ok')
}

module.exports.update = (req, res, next) => {
    res.send('ok')
}