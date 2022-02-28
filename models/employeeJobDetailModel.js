import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;
const EmployeeJobDetailSchema = new mongoose.Schema(
  {
    service_id: {
      type: ObjectId,
      required: true,
      ref: 'Service',
    },
    staff_id: {
      type: ObjectId,
      required: true,
      ref: 'Staff',
    },
    schedule: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('EmployeeJobDetail', EmployeeJobDetailSchema);