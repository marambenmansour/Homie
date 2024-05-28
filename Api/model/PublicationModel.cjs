const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {Schema} = mongoose;

const publicationSchema = new mongoose.Schema({
  address: {
    type: String,
    required: false,
  },
  Type: {
    type: String,
    required: false,
  },
  Description: {
    type: String,
    required: true,
  },
  Bathrooms: {
    type: String,
    required: true,
  },
  Kitchens: {
    type: String,
    required: true,
  },
  Rooms: {
    type: String,
    required: true,
  },
});

publicationSchema.pre('save', async function (next) {
  next();
});

module.exports = mongoose.model('Publication', publicationSchema);
