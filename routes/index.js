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

const {isLoggedIn, hasAuth} = require('../middleware/has-auth');

// Show Leads
router.get('/leads', isLoggedIn, hasAuth, landing.showLeads);

// Show Lead details
router.get('/lead/:leadId', hasAuth, landing.showLead);

// Edit Lead details
router.get('/lead/:leadId/edit', hasAuth, landing.showEditLead);
router.post('/lead/:leadId/edit', hasAuth, landing.editLead);

// Delete Lead
router.post('/lead/:leadId/delete', hasAuth, landing.deleteLead);
router.post('/lead/:leadId/delete-json', hasAuth, landing.deleteLeadJson);

module.exports = router;
