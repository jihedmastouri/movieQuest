import mongoose from 'mongoose';

export const CountrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
});

export const SocialMedia = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

export const MediaInfo = new mongoose.Schema({
  backdrop_path: { type: String, required: true },
  belongs_to_collection: { type: String, required: true },
  budget: { type: Number, required: true },
  genres: { type: Array, required: true },
  homepage: { type: String, required: true },
  original_language: { type: String, required: true },
  original_title: { type: String, required: true },
  overview: { type: String, required: true },
  poster_path: { type: String, required: true },
  production_countries: [CountrySchema],
  actors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'peoples',
    },
  ],
  cast: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'peoples',
    },
  ],
  socials: [SocialMedia],
});
