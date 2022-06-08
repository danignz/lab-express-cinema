const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  director: String,
  stars: [String],
  image: {
    type: String,
    default: "https://static.wikia.nocookie.net/youtube/images/2/21/Movie_Recaps.jpg"
  },
  description: String,
  showtimes: [String]
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
