var express = require('express');
var router = express.Router();

const landing = require('../controllers/landing');
const user = require('../controllers/user');

// Sign up and login routes
router.get('/login', user.showLogin);
router.get('/signup', user.showSignup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.get('/logout', user.logout);
router.post('/logout', user.logout);

// Get home page
router.get('/', landing.getLanding);

// Create new Lead
router.post('/', landing.submitLead);

// Show Leads
router.get('/leads', landing.showLeads);

// Show Lead details
router.get('/lead/:leadId', landing.showLead);

// Edit Lead details
router.get('/lead/:leadId/edit', landing.showEditLead);
router.post('/lead/:leadId/edit', landing.editLead);

// Delete Lead
router.post('/lead/:leadId/delete', landing.deleteLead);
router.post('/lead/:leadId/delete-json', landing.deleteLeadJson);

module.exports = router;
