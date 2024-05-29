import mongoose from 'mongoose';
import { MediaInfo } from './helpers';

const movieSchema = new mongoose.Schema(
  {
    tmdbId: { type: String, required: true, unique: true, dropDups: true },
    imdbId: { type: String, required: true },
    adult: { type: Boolean, required: true },
    slug: { type: String, required: true, unique: true, dropDups: true },
    tmdbInfo: MediaInfo,
    sourceOfTruth: { type: String, enum: ['tmdb', 'our'], default: 'tmdb' },
  },
  { timestamps: true }
);

const movies = mongoose.model('movies', movieSchema);

module.exports = {
  Store: movies,
  Storeschema: movieSchema,
};
