const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const consultation = require('../controllers/user.Conusltation.controller');
const router = express.Router();
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// create a consultation route
router.route('/addConsultation').post(consultation.createConsultation);
router.route('/consultations').get(consultation.getAllConsultation);
router.route('/updateConsultation/:id').put(consultation.updateConsultationDescription);

module.exports = router;