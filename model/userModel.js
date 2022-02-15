import mongoose from 'mongoose';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    uid: {
      required: true,
      type: String,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    photoURL: {
      type: String,
    },
    hashed_password: {
      type: String,
    },
    phoneNumber: {
      type: String,
      trim: true,
      maxLength: 10,
    },
    role: {
      type: Number,
      default: 1,
    },
    address: {
      type: String,
      trim: true,
      maxLength: 100,
    },
    gender: {
      type: String,
      trim: true,
      maxLength: 3,
    },
    verify: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(beautifyUnique);

// xử lý password truyền vào  mã hóa gán cho hashed_password
UserSchema.virtual('password').set(function (password) {
  this.salt = uuidv4();
  this.hashed_password = this.encrytPassword(password);
});
// trả về password đã mã hóa
UserSchema.methods = {
  authenticate: function (plainText) {
    return this.encrytPassword(plainText) === this.hashed_password;
  },
  encrytPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (error) {
      return '';
    }
  },
};

module.exports = mongoose.model('User', UserSchema);
