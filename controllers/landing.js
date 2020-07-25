const models = require('../models');

exports.getLanding = function (req, res, next) {
    res.render('landing', { title: 'Express' });
};

exports.submitLead = function (req, res, next) {
    console.log(`lead email: ${req.body.lead_email}`);

    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/leads');
    });
};

exports.showLeads = function (req, res, next) {
    return models.Lead.findAll().then(leads => {
        res.render('landing', { title: 'Express', leads });
    });
};

exports.showLead = function (req, res, next) {
    return models.Lead.findOne({
        where: {
            id: req.params.leadId
        }
    }).then(lead => {
        res.render('lead', { lead });
    });
};

exports.showEditLead = function (req, res, next) {
    return models.Lead.findOne({
        where: {
            id: req.params.leadId
        }
    }).then(lead => {
        res.render('lead/edit_lead', { lead });
    });
};

exports.editLead = function (req, res, next) {
    return models.Lead.update({
        email: req.body.lead_email
    }, {
        where: {
            id: req.params.leadId
        }
    }).then(result => {
        res.redirect('/lead/' + req.params.leadId);
    });
}

exports.deleteLead = function (req, res, next) {
    return models.Lead.destroy({
        where: {
            id: req.params.leadId
        }
    }).then(result => {
        console.log(`Deleted user with ID: ${req.params.leadId}`);
        res.redirect('/leads');
    });
}

exports.deleteLeadJson = function (req, res, next) {
    return models.Lead.destroy({
        where: {
            id: req.params.leadId
        }
    }).then(result => {
        console.log(`Deleted user with ID: ${req.params.leadId}`);
        res.send({msg: 'Success'});
    });
}