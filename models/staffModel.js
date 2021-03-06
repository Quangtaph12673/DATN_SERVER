import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;
const StaffSchema = new mongoose.Schema(
  {
    user_id: {
      type: ObjectId,
      ref: 'User',
      unique: true,
    },
    star: {
      type: Number,
      required: true,
      maxLength: 5,
      default: 0,
    },
    /**
     * 0 - ok
     * 1 - đang bận
     * 2 - nghỉ làm
     */
    status: {
      type: Number,
      default: 0,
    },
    rank: {
      type: String,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Staff', StaffSchema);
