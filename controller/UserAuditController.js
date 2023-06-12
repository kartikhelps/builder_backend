import mongoose from 'mongoose';
import UserAudit from '../models/UserAuditModel.js';


const getUserAuditList = async (req, res, next) => {
  try {
    let data = await UserAudit.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateUserAuditByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await UserAudit.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "UserAudit updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getUserAuditById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await UserAudit.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUserAuditById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await UserAudit.findByIdAndRemove(id)
    res.status(200).json({ messgae: "UserAudit deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUserAuditByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserAudit.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'UserAudit not found' });
    }
    res.status(200).json({ message: "UserAudit deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeUserAudit = async (req, res, next) => {
  try {
    let newModel = new UserAudit(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkUserAudit = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await UserAudit.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkUserAudit = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new UserAudit(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getUserAuditList,
  storeUserAudit,
  getUserAuditById,
  deleteUserAuditById,
  updateUserAuditByID,
  updateBulkUserAudit,
  insertBulkUserAudit
}
