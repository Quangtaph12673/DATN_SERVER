import NotificationStaff from '../models/NotificationStaffModel';
import _ from 'lodash';

export const listNotificationStaff = (staffId) => {
  const ObjectId = require('mongodb').ObjectId;
  const id = new ObjectId(staffId);
  return new Promise((resolve, reject) => {
    NotificationStaff.find({ staff_id: id })
      .populate([{ path: 'staff_id' }, { path: 'appointments_id' }])
      .exec((err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
  });
};

export const createNotificationStaff = (data) => {
  const notificationStaff = new NotificationStaff(data);
  return new Promise((resolve, reject) => {
    notificationStaff.save((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

export const removeNotificationStaff = (idNoti) => {
  return new Promise((resolve, reject) => {
    NotificationStaff.find({ _id: idNoti })
      .remove()
      .exec((err, data) => {
        if (err) {
          reject(err);
        }
        resolve('remove success');
      });
  });
};

// export const updateNotificationStaff = (req, res) => {
//   let notificationStaff = req.notificationStaff;
//   notificationStaff = _.assignIn(notificationStaff, req.body);
//   notificationStaff.save((err, data) => {
//     if (err) {
//       return res.status(400).json({
//         error: 'Update notification failed!',
//       });
//     }
//     res.json({
//       message: 'Update notification successfully',
//       data,
//     });
//   });
// };