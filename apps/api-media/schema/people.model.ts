import mongoose from 'mongoose';
import { SocialMedia } from './helpers';

export const peopeScheme = new mongoose.Schema({
  name: { type: String, required: true },
  socials: SocialMedia,
});

export const people = mongoose.model('peoples', peopeScheme);
