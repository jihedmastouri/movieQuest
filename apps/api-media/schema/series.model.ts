import mongoose from 'mongoose';
import { MediaInfo } from './helpers';

export const seriesSchema = new mongoose.Schema({
  tmdbInfo: MediaInfo,
});

export const episodeSchema = new mongoose.Schema({
  series: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'peoples',
  },
  season: { type: Number, required: true },
  tmdbInfo: MediaInfo,
});

export const series = mongoose.model('series', seriesSchema);
export const episodes = mongoose.model('episodes', episodeSchema);
