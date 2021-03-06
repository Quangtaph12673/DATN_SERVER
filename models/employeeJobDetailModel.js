import mongoose from 'mongoose';
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const { ObjectId } = mongoose.Schema;
const EmployeeJobDetailSchema = new mongoose.Schema(
  {
    service_id: {
      type: ObjectId,
      unique: false,
      ref: 'Service',
    },
    staff_id: {
      type: ObjectId,
      required: true,
      ref: 'Staff',
      unique: true,
    },
    schedule: {
      type: Array,
    },
    dayOff: {
      type: Array,
    },
    active: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
EmployeeJobDetailSchema.plugin(beautifyUnique);

module.exports = mongoose.model('EmployeeJobDetail', EmployeeJobDetailSchema);
