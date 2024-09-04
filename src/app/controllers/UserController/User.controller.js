require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../../models');
const { userModel: User, emailModel: Email } = db;

const helper = require('../../../utils/helper');
const {
  sendThankYouEmail,
  sendEnquiryReceivedEmail,
} = require('../../email/email');

// POST route to create a new user

exports.createUser = async (req, res) => {
  try {
    // Create new user
    const newUser = await User.create(req.body);

    if (newUser) {
      return helper.response(
        res,
        true,
        'Thank you for sharing the details! We will get back to you soon.',
        newUser,
        201
      );
    }
  } catch (error) {
    console.log(error);
    return helper.response(res, false, 'Something went wrong!', null, 500);
  }
};

exports.createEmailDocument = async (req, res) => {
  try {
    const email = req.body.email;

    console.log(req.body);

    // Check if the email already exists
    const existingEmail = await Email.findOne({ email });

    // If email exists, return response indicating subscription
    if (existingEmail) {
      return helper.response(
        res,
        false,
        'Hi, You are already subscribed to the blog!', // Changed response text
        null,
        200 // Changed status code to 200 for success
      );
    }

    // If email doesn't exist, create a new record
    const newEmail = await Email.create(req.body);
    if (!newEmail) {
      return helper.response(
        res,
        true,
        'There was an error Subscribing!', // Changed response text
        null, // Corrected variable name from 'newUser' to 'newEmail'
        400 // Status code remains 201 for successful creation
      );
    }
    await sendThankYouEmail(email);
    // Return response indicating successful subscription
    return helper.response(
      res,
      true,
      'Thanks for subscribing to the blog!', // Changed response text
      newEmail, // Corrected variable name from 'newUser' to 'newEmail'
      201 // Status code remains 201 for successful creation
    );
  } catch (error) {
    // Handle errors appropriately
    console.error('Error in getEmailId:', error);
    return helper.response(
      res,
      false,
      'An error occurred while processing your request.', // Changed generic error message
      null,
      500 // Changed status code to 500 for server error
    );
  }
};
