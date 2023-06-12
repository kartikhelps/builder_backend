import mongoose from 'mongoose';
import UserRole from '../models/UserRoleModel.js';


const getUserRoleList = async (req, res, next) => {
  try {
    let data = await UserRole.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateUserRoleByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await UserRole.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "UserRole updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getUserRoleById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await UserRole.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUserRoleById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await UserRole.findByIdAndRemove(id)
    res.status(200).json({ messgae: "UserRole deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUserRoleByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserRole.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'UserRole not found' });
    }
    res.status(200).json({ message: "UserRole deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeUserRole = async (req, res, next) => {
  try {
    let newModel = new UserRole(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkUserRole = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await UserRole.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkUserRole = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new UserRole(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getUserRoleList,
  storeUserRole,
  getUserRoleById,
  deleteUserRoleById,
  updateUserRoleByID,
  updateBulkUserRole,
  insertBulkUserRole
}
