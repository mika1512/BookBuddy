import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String },
  emailVerified: { type: Boolean, default: null }
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
