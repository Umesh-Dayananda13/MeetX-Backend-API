const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    required: true 
  },
  activityId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'activity', 
    required: true 
  },
  bookedAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('booking', bookingSchema);