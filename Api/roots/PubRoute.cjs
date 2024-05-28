const express = require('express');
const router = express.Router();
const AddPublicationController = require('../controllers/AddpubController.cjs');

router.post(
  '/addpublication',

  AddPublicationController.addPublication,
);

module.exports = router;
