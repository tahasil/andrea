const mongoose = require('mongoose');
const db = require('.././models');
const {
  userModel: User,
  eventCoordinatorModel: EventCoordinator,
  bookAppointmentModel: BookAppointment,
} = db;

const helper = require('../../utils/helper');
module.exports = async (req, res, next) => {
  try {
    const eventCoordinatorId = req.body.event_coordinator_id; // Assuming event coordinator ID is passed in the request body

    // Query the database to find the event coordinator by ID
    const eventCoordinator = await EventCoordinator.findOne({
      email: 'cyrillopez05@gmail.com',
    });

    if (!eventCoordinator) {
      // Handle event coordinator not found
      return helper.response(
        res,
        false,
        "Andrea's Profile not found!",
        null,
        404
      );
    }
    req.eventCoordinator = eventCoordinator;
    next(); // Call next to pass control to the next middleware or route handler
  } catch (error) {
    return helper.response(res, false, 'Something went wrong!', null, 500);
  }

  // Attach event coordinator object to req object
};
