let mongoose = require('mongoose');
let sellerSchema = new mongoose.Schema({
  lastname: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },

  register_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('vendeur', sellerSchema);
