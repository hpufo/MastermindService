const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create player's schema and model
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name field is required']
  },
  turns: {
    type: Number,
    required: [true, 'turns field is required']
  }
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;