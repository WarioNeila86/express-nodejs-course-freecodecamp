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
    return models.Lead.findAll().then(leads => {
        res.render('landing', { title: 'Express', leads });
    });
};

exports.showLead = function(req, res, next) {
    console.log('SHOW LEAD:');
    console.log(`ID: ${req.params.leadId}`);

    return models.Lead.findOne({
        where: {
            id: req.params.leadId
        }
    }).then(lead => {
        res.render('lead', { lead });
    });
};