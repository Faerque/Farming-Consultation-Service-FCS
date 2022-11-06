const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// import router from express js
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const AllVerifications = require('../controllers/user.Verification.controller.js');

// show all verifications
router.route('/').get(AllVerifications.getAllUserVerification);

// create a verification
router.route('/addVerification').post(AllVerifications.createUserVerification);

// get a verification by id
router.route('/checkingVerification/:id').get(AllVerifications.getUserVerificationById);

module.exports = router;