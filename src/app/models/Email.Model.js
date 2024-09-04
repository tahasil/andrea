const mongoose = require('mongoose');

// Define the User schema
const EmailSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

// Define the EmailModel based on the schema
const EmailModel =
  mongoose.models.Email || mongoose.model('Email', EmailSchema, 'emails');

// Export the Email model
module.exports = EmailModel;
