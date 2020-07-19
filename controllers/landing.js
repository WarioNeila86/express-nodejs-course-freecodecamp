const models = require('../models');

exports.getLanding = function(req, res, next) {
    res.render('landing', { title: 'Express' });
};

exports.submitLead = function(req, res, next) {
    console.log(`lead email: ${req.body.lead_email}`);

    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/leads');
    });
};

exports.showLeads = function(req, res, next) {
    models.Lead.findAll().then(leads => {
        res.render('landing', { title: 'Express', leads });
    });
};