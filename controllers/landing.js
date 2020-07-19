exports.getLanding = function(req, res, next) {
    res.render('landing', { title: 'Express' });
};