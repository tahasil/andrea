const mongoose = require('mongoose');

// Define the User schema
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'], // Validation: First name is required
    },
    phone: {
      type: String,
      validate: {
        validator: function (value) {
          // Custom validation: Validate Canadian phone number format
          return /^[0-9]{10}$/.test(value); // Canadian phone numbers must be 10 digits
        },
        message: 'Phone number must be a valid Canadian number (10 digits).', // Error message for invalid phone number
      },
    },
    email: {
      type: String,
      required: [true, 'Email is required.'], // Validation: Email is required
      validate: {
        validator: function (value) {
          // Regular expression for email validation
          return /\S+@\S+\.\S+/.test(value); // Simple email validation
        },
        message: 'Email must be in a valid format.', // Error message for invalid email format
      },
    },
    meeting_agenda: {
      type: String,
      required: [true, 'Meeting Agenda is required.'],
    },
    is_enquiry: {
      type: Boolean,
      required: [true, 'Is Enquiry is required.'], // Validation: Email is required
      default: false,
    },
    is_enquiry_resolved: {
      type: Boolean,
      required: [true, 'Is Enquiry resolved is required.'], // Validation: Email is required
      default: false,
    },
    enquiry: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

// Define the UserModel based on the schema
const UserModel =
  mongoose.models.User || mongoose.model('User', UserSchema, 'users');

// Export the User model
module.exports = UserModel;
