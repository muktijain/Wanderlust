const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { reviewSchema } = require("./review.js");
const { number, required } = require("joi");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
    price: Number,
    location: String,
    country: String,
    reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  },
  category: {
    type: String,
    enum: [
      'Trending', 
      'Rooms', 
      'IconicCities', 
      'Beach', 
      'AmazingPools', 
      'Lakefront', 
      'Camping', 
      'Farms', 
      'Activities',
      'Artic',
      'Domes',
      'Cruise'
    ],
    required: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;