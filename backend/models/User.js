import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
    minlength: 8
  },
  admin:{
    type:Boolean,
    default:false,
  }
}, {
  timestamps: true
});

export const User = mongoose.model("User", userSchema);
